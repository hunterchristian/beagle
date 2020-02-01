const getTimeElapsedUntilEventsOccurred = require('./getTimeElapsedUntilEventsOccurred');

const mockPaintEvents = [
  {
    pid: 33116,
    tid: 775,
    ts: 312133479621,
    ph: 'R',
    cat: 'loading,rail,devtools.timeline',
    name: 'firstPaint',
    tts: 159220,
    args: {
      frame: '92AFCE20D270EC4B889A7F2342B33F4A',
      data: { navigationId: '9D098AA921E2081FB85C85C0F0B1B5C6' },
    },
  },
  {
    pid: 33116,
    tid: 775,
    ts: 312133479621,
    ph: 'R',
    cat: 'loading,rail,devtools.timeline',
    name: 'firstContentfulPaint',
    tts: 159244,
    args: {
      frame: '92AFCE20D270EC4B889A7F2342B33F4A',
      data: { navigationId: '9D098AA921E2081FB85C85C0F0B1B5C6' },
    },
  },
  {
    pid: 33116,
    tid: 775,
    ts: 312133479621,
    ph: 'R',
    cat: 'loading,rail,devtools.timeline',
    name: 'firstMeaningfulPaintCandidate',
    tts: 159262,
    args: {
      frame: '92AFCE20D270EC4B889A7F2342B33F4A',
      data: { navigationId: '9D098AA921E2081FB85C85C0F0B1B5C6' },
    },
  },
];

describe('getTimeElapsedUntilEventsOccurred', () => {
  it('should return the elapsed time for a set of events', () => {
    expect(
      getTimeElapsedUntilEventsOccurred(mockPaintEvents, 312133429621)
    ).toStrictEqual({
      firstPaintMillis: 50,
      firstContentfulPaintMillis: 50,
      firstMeaningfulPaintCandidateMillis: 50,
    });
  });
});
