
const fs = require('fs');
const path = require('path');

const themePath = '../../';
const modulePath = process.cwd();
console.log(path.resolve(__dirname, 'test.txt'));
console.log(path.resolve(themePath, 'destination.txt'));

fs.copyFile(path.resolve(__dirname, 'test.txt'), path.resolve(themePath, 'destination.txt'), (err) => {
  if (err) throw err;
  console.log('test.txt was copied to destination.txt');
});
