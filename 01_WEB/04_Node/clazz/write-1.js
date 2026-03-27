const fs = require('fs');

// 동기함수
const data = fs.readFileSync(__dirname + '/example.txt', 'utf-8');

if (fs.existsSync(__dirname + '/text-1.txt')) {
  console.log('file already exist');
} else {
  fs.writeFileSync(__dirname + '/text-1.txt', data);
  console.log('text-1.txt is saved!');
}

// 비동기함수
fs.readFile(__dirname + '/example.txt', 'utf-8', (err, data) => {
  if (err) {
    return console.error(err);
  }
  if (fs.existsSync(__dirname + '/text-2.txt')) {
    console.log('file already exist');
  } else {
    fs.writeFile(__dirname + '/text-2.txt', data, (err) => {
      if (err) {
        console.error(err);
      }
      console.log('text-2.txt is saved!');
    });
  }
});
