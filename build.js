const Inliner = require('inliner');
const path = require('path');
const fs = require('fs');

const inputPath = path.resolve(__dirname, 'index.html');
const outputPath = path.resolve(__dirname, 'dist', 'index.html');

console.log('==> Inlining...')
new Inliner(inputPath, async function (error, html) {
  if (error) {
    console.error(error);
    return;
  }

  console.log('==> Inlining completed. Saving...');
  fs.writeFileSync(outputPath, html)
  console.log(`==> File saved at ${outputPath}`);
});
