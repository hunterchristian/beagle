const fs = require('fs');
const puppeteer = require('puppeteer');

function safeExecute(func, failMsg) {
  try {
    func();
  } catch (e) {
    console.error(failMsg);
    console.error(e);
    process.exit(1);
  }
}

async function getTrace(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Starts to record a trace of the operations
  await page.tracing.start({ path: 'trace.json' });

  await page.goto(url);
  await page.waitForSelector('title');

  // Stops the recording
  await page.tracing.stop();

  await browser.close();

  let traceStr = '';
  safeExecute(
    () => (traceStr = fs.readFileSync('trace.json', 'utf-8')),
    'Failed to read contents of trace.json'
  );

  let traceJson = {};
  safeExecute(
    () => (traceJson = JSON.parse(traceStr)),
    'Failed to parse contents of trace.json into a JS object'
  );

  return traceJson;
}

module.exports = getTrace;
