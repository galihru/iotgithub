const core = require('@actions/core');
const createFiles = require('./createFiles');

async function run() {
  try {
    const jsonFilename = core.getInput('json_filename');
    const htmlFilename = core.getInput('html_filename');
    const cssFilename = core.getInput('css_filename');
    const siteTitle = core.getInput('site_title');
    const chartTitle = core.getInput('chart_title');

    await createFiles(jsonFilename, htmlFilename, cssFilename, siteTitle, chartTitle);

    core.setOutput('message', 'Files created successfully!');
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
