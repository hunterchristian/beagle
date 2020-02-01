const PAINT_EVENT_NAMES = {
  firstPaint: true,
  firstContentfulPaint: true,
  firstMeaningfulPaintCandidate: true,
};

const getPaintEventsFromTrace = traceEvents =>
  traceEvents.filter(event => PAINT_EVENT_NAMES[event.name]);

module.exports = getPaintEventsFromTrace;
