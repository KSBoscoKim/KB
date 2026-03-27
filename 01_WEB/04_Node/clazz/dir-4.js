fs = require('fs');

fs.rm(__dirname + '/test', { recursive: true }, (err) => {
  if (err) return console.log(err);
  console.log('folder deleted.');
});
