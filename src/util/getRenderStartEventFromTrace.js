function getRenderStartEvent(traceEvents) {
  const navigationStartEvent = traceEvents.find(
    e => e.name === 'navigationStart'
  );
  return traceEvents.find(
    e =>
      e.name === 'ResourceReceivedData' &&
      e.args.data.requestId === navigationStartEvent.args.data.navigationId
  );
}

module.exports = getRenderStartEvent;
