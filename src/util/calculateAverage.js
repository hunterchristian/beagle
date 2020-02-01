function calculateAverage(values) {
  const sum = values.reduce(function(sum, value) {
    return sum + value;
  }, 0);

  const avg = sum / values.length;
  return avg;
}

module.exports = calculateAverage;
