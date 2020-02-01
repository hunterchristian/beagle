const getRenderStartEventFromTrace = require('./getRenderStartEventFromTrace');

const mockTraceEvents = [
  {
    pid: 39973,
    tid: 775,
    ts: 317910126051,
    ph: 'R',
    cat: 'blink.user_timing',
    name: 'requestStart',
    tts: 16048079,
    args: {},
  },
  {
    pid: 39973,
    tid: 775,
    ts: 317909085240,
    ph: 'R',
    cat: 'blink.user_timing',
    name: 'navigationStart',
    tts: 16048571,
    args: {
      frame: 'DF256C387D401F812D3F0ED0DBC5B177',
      data: {
        documentLoaderURL: 'https://www.npmjs.com/package/a15y/access',
        isLoadingMainFrame: true,
        navigationId: 'D6713DD6D365B64BEA61EBAFCAB24CE9',
      },
    },
  },
  {
    pid: 39973,
    tid: 775,
    ts: 317909086224,
    ph: 'R',
    cat: 'blink.user_timing',
    name: 'fetchStart',
    tts: 16048583,
    args: { frame: 'DF256C387D401F812D3F0ED0DBC5B177' },
  },
  {
    pid: 39973,
    tid: 775,
    ts: 317910553502,
    ph: 'I',
    cat: 'devtools.timeline',
    name: 'FrameStartedLoading',
    s: 't',
    tts: 16048729,
    args: { frame: 'DF256C387D401F812D3F0ED0DBC5B177' },
  },
  {
    pid: 39973,
    tid: 775,
    ts: 317910567028,
    ph: 'X',
    cat: 'disabled-by-default-devtools.timeline',
    name: 'RunTask',
    dur: 49,
    tdur: 49,
    tts: 16057938,
    args: {},
  },
  {
    pid: 39973,
    tid: 775,
    ts: 317910567492,
    ph: 'I',
    cat: 'devtools.timeline',
    name: 'ResourceReceivedData',
    s: 't',
    tts: 16058117,
    args: {
      data: {
        requestId: 'D6713DD6D365B64BEA61EBAFCAB24CE9',
        frame: 'DF256C387D401F812D3F0ED0DBC5B177',
        encodedDataLength: 15758,
      },
    },
  },
  {
    pid: 39973,
    tid: 775,
    ts: 317910567432,
    ph: 'X',
    cat: 'disabled-by-default-devtools.timeline',
    name: 'RunTask',
    dur: 323,
    tdur: 316,
    tts: 16058058,
    args: {},
  },
];

const expectedRenderStartEvent = {
  pid: 39973,
  tid: 775,
  ts: 317910567492,
  ph: 'I',
  cat: 'devtools.timeline',
  name: 'ResourceReceivedData',
  s: 't',
  tts: 16058117,
  args: {
    data: {
      requestId: 'D6713DD6D365B64BEA61EBAFCAB24CE9',
      frame: 'DF256C387D401F812D3F0ED0DBC5B177',
      encodedDataLength: 15758,
    },
  },
};

describe('getRenderStartEventFromTrace', () => {
  it('should return the event that marks the beginning of the first render performed by the browser', () => {
    expect(getRenderStartEventFromTrace(mockTraceEvents)).toStrictEqual(
      expectedRenderStartEvent
    );
  });
});
