const calculateStandardDeviation = require('./calculateStandardDeviation');

describe('calculateStandardDeviation', () => {
  it('should calculate the standard deviation of an array of numbers', () => {
    expect(calculateStandardDeviation([2, 4])).toBe(1);
  });
});
