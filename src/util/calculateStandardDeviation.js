const calculateAverage = require('./calculateAverage');

function standardDeviation(values) {
  const avg = calculateAverage(values);

  const squareDiffs = values.map(function(value) {
    const diff = value - avg;
    const sqrDiff = diff * diff;
    return sqrDiff;
  });

  const avgSquareDiff = calculateAverage(squareDiffs);

  const stdDev = Math.sqrt(avgSquareDiff);
  return stdDev;
}

module.exports = standardDeviation;
