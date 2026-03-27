const fs = require('fs');

if (!fs.existsSync(__dirname + '/text-1.txt')) {
  console.log('file does not exist');
} else {
  fs.unlinkSync(__dirname + '/text-1.txt');
  console.log('file deleted');
}
