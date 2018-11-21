
const fs = require('fs');
const path = require('path');
var ncp = require('ncp').ncp;

const themePath = '../../../';
const modulePath = process.cwd();

ncp(path.resolve(modulePath, 'templates'), path.resolve(themePath, 'templates'), function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('done!');
});
// fs.copyFile(path.resolve(__dirname, 'test.txt'), path.resolve(themePath, 'destination.txt'), (err) => {
//   if (err) throw err;
//   console.log('test.txt was copied to destination.txt');
// });
