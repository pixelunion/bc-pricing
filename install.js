
const fs = require('fs');
const path = require('path');
var ncp = require('ncp').ncp;

const themePath = '../../../';
const modulePath = process.cwd();

ncp(path.resolve(themePath, 'templates'), path.resolve(modulePath, 'templates'));
// fs.copyFile(path.resolve(__dirname, 'test.txt'), path.resolve(themePath, 'destination.txt'), (err) => {
//   if (err) throw err;
//   console.log('test.txt was copied to destination.txt');
// });
