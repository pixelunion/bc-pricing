global.__basedir = __dirname;

const fs = require('fs');

const themePath = '../../';
const modulePath = process.cwd();
console.log(__basedir);
fs.copyFile('test.txt', themeFolder + 'destination.txt', (err) => {
  if (err) throw err;
  console.log('test.txt was copied to destination.txt');
});
