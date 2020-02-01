function getTracingStartedEventFromTrace(traceEvents) {
  const tracingStartedEvent = traceEvents.find(
    event => event.name === 'TracingStartedInBrowser'
  );
  if (!tracingStartedEvent) {
    console.error(
      'Could not find event with name "TracingStartedInBrowser" in the list of trace events. Did you call page.tracing.start correctly?'
    );
    process.exit(1);
  }

  return tracingStartedEvent;
}

module.exports = getTracingStartedEventFromTrace;
