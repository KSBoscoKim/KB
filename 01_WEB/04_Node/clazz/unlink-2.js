const fs = require('fs');

if (!fs.existsSync(__dirname + '/text-2.txt')) {
  console.log('file does not exist');
} else {
  fs.unlinkSync(__dirname + '/text-2.txt', (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('file deleted');
  });
}
