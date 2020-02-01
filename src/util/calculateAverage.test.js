const calculateAverage = require('./calculateAverage');

describe('calculateAverage', () => {
  it('should calculate the average of an array of numbers', () => {
    expect(calculateAverage([2, 4])).toBe(3);
  });
});
