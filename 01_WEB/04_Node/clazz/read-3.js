fs = require('fs');
path = require('path');

filepath = path.join(__dirname, 'example.txt');

fs.readFile('./example.txt', 'utf-8', (err, data) => {
  if (err) {
    return console.error(err);
  }
  console.log(data);
});

fs.readFile(filepath, 'utf-8', (err, data) => {
  if (err) {
    return console.error(err);
  }
  console.log(data);
});
