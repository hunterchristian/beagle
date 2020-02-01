const getTrace = require('./getTrace');
const getRenderStartEventFromTrace = require('../util/getRenderStartEventFromTrace');
const getPaintEventsFromTrace = require('../util/getPaintEventsFromTrace');
const getTracingStartedEventFromTrace = require('../util/getTracingStartedEventFromTrace');
const getTimeElapsedUntilEventsOccurred = require('../util/getTimeElapsedUntilEventsOccurred');
const calculateAverage = require('../util/calculateAverage');
const calculateStandardDeviation = require('../util/calculateStandardDeviation');

async function collectPaintTimings(url) {
  const { traceEvents } = await getTrace(url);
  const tracingStartedEvent = getTracingStartedEventFromTrace(traceEvents);
  const renderStartEvent = getRenderStartEventFromTrace(traceEvents);
  const paintEvents = getPaintEventsFromTrace(traceEvents);

  const renderTimes = paintEvents.reduce((acc, e) => {
    acc[e.name + 'RenderTimeMillis'] = (e.ts - renderStartEvent.ts) / 1000;
    return acc;
  }, {});

  const startTime = tracingStartedEvent.ts;
  const paintEventTimings = getTimeElapsedUntilEventsOccurred(
    paintEvents,
    startTime
  );

  return { paintEventTimings, renderTimes };
}

async function collectPaintTimingsXTimes(url, numSamples) {
  const collection = {};
  for (let i = 0; i < numSamples; i++) {
    const timings = await collectPaintTimings(url);
    Object.keys(timings).forEach(timingName => {
      Object.keys(timings[timingName]).forEach(key => {
        collection[timingName] = collection[timingName] || {};
        collection[timingName][key] = collection[timingName][key] || [];
        collection[timingName][key].push(timings[timingName][key]);
      });
    });
  }

  const results = {};
  Object.keys(collection).forEach(timingName => {
    Object.keys(collection[timingName]).forEach(key => {
      results[timingName] = results[timingName] || {};
      results[timingName][key] = {
        average: calculateAverage(collection[timingName][key]),
        standardDev: calculateStandardDeviation(collection[timingName][key]),
      };
    });
  });

  return results;
}

module.exports = collectPaintTimingsXTimes;
