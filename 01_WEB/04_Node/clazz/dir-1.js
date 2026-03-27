fs = require('fs');

if (fs.existsSync(__dirname + '/test')) {
  console.log('folder already exists');
} else {
  fs.mkdir(__dirname + '/test', (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('folder created.');
  });
}
