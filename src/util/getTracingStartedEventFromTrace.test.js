const getTracingStartedEventFromTrace = require('./getTracingStartedEventFromTrace');

const mockTraceEvents = [
  {
    pid: 1469,
    tid: 775,
    ts: 317909030497,
    ph: 'X',
    cat: 'disabled-by-default-devtools.timeline',
    name: 'RunTask',
    dur: 545,
    tdur: 309,
    tts: 5220156141,
    args: {},
  },
  {
    pid: 1469,
    tid: 775,
    ts: 317909031367,
    ph: 'I',
    cat: 'disabled-by-default-devtools.timeline',
    name: 'TracingStartedInBrowser',
    s: 't',
    tts: 5220156572,
    args: {
      data: {
        frameTreeNodeId: 7820,
        persistentIds: true,
        frames: [
          {
            frame: 'DF256C387D401F812D3F0ED0DBC5B177',
            url: 'https://www.npmjs.com/package/a15y/access',
            name: '',
            processId: 39973,
          },
        ],
      },
    },
  },
  {
    pid: 1469,
    tid: 775,
    ts: 317909031294,
    ph: 'X',
    cat: 'disabled-by-default-devtools.timeline',
    name: 'RunTask',
    dur: 261,
    tdur: 262,
    tts: 5220156498,
    args: {},
  },
];

const expectedTraceEventStarted = {
  pid: 1469,
  tid: 775,
  ts: 317909031367,
  ph: 'I',
  cat: 'disabled-by-default-devtools.timeline',
  name: 'TracingStartedInBrowser',
  s: 't',
  tts: 5220156572,
  args: {
    data: {
      frameTreeNodeId: 7820,
      persistentIds: true,
      frames: [
        {
          frame: 'DF256C387D401F812D3F0ED0DBC5B177',
          url: 'https://www.npmjs.com/package/a15y/access',
          name: '',
          processId: 39973,
        },
      ],
    },
  },
};

describe('getTracingStartedEventFromTrace', () => {
  it('should return the elapsed time for a set of events', () => {
    expect(getTracingStartedEventFromTrace(mockTraceEvents)).toStrictEqual(
      expectedTraceEventStarted
    );
  });
});
