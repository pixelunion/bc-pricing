
const fs = require('fs');
const path = require('path');

const themePath = '../../';
const modulePath = process.cwd();
console.log(themePath);
fs.copyFile(path.resolve(__dirname, 'test.txt'), path.resolve(themePath, 'destination.txt'), (err) => {
  if (err) throw err;
  console.log('test.txt was copied to destination.txt');
});
