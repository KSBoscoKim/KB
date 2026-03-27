const fs = require('fs');

fs.readFile(__dirname + '/example.txt', (err, data) => {
  if (err) return console.error(err);

  console.log(data);
  console.log('\n');
  console.log(data.toString());
});
