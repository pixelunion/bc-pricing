const fs = require('fs');

const themeFolder = '../../';

console.log('process');
fs.copyFile('test.txt', themeFolder + 'destination.txt', (err) => {
  if (err) throw err;
  console.log('test.txt was copied to destination.txt');
});
