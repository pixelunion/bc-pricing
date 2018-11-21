const fs = require('fs');

console.log('something cool');

fs.copyFile('test.txt', '../../destination.txt', (err) => {
  // if (err) throw err;
  console.log('test.txt was copied to destination.txt');
});
