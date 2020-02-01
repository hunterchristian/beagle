#! /usr/bin/env node
const collectPaintTimingsXTimes = require('./puppeteer/collectPaintTimingsXTimes');

const argv = require('yargs')
  .usage('Usage: beagle [url]')
  .demandCommand(1)
  .option('numSamples', {
    description:
      'Number of times performance test should be run. Increase to reduce margin of error.',
    default: 10,
  }).argv;

(async function() {
  const [url] = argv._;
  const results = await collectPaintTimingsXTimes(url, argv.numSamples);
  console.log(JSON.stringify(results, null, 2));
})();
