const fs = require('fs');
const path = require('path');

function createFiles(jsonFilename, htmlFilename, cssFilename, siteTitle, chartTitle) {
  // Create JSON file (example data)
  const jsonData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    values: [10, 20, 30, 40, 50]
  };
  fs.writeFileSync(jsonFilename, JSON.stringify(jsonData, null, 2));

  // Create CSS file
  const cssContent = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8');
  fs.writeFileSync(cssFilename, cssContent);

  // Create HTML file
  let htmlContent = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');
  htmlContent = htmlContent
    .replace(/{{ site_title }}/g, siteTitle)
    .replace(/{{ chart_title }}/g, chartTitle)
    .replace(/{{ json_filename }}/g, jsonFilename)
    .replace(/{{ css_filename }}/g, cssFilename);
  fs.writeFileSync(htmlFilename, htmlContent);
}

module.exports = createFiles;
