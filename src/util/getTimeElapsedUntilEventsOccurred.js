const getTimeElapsedUntilEventOccurredMillis = (event, startTime) =>
  Math.round((event.ts - startTime) / 1000);

const getTimeElapsedUntilEventsOccurred = (events, startTime) =>
  events.reduce((acc, event) => {
    acc[event.name + 'Millis'] = getTimeElapsedUntilEventOccurredMillis(
      event,
      startTime
    );
    return acc;
  }, {});

module.exports = getTimeElapsedUntilEventsOccurred;
