const fs = require('fs');

// 동기 함수
const data = fs.readFileSync(__dirname + '/example.txt', 'utf-8');
console.log(data);

// 비동기 함수
fs.readFile(__dirname + '/example.txt', 'utf-8', (err, data) => {
  if (err) {
    return console.error(err);
  }
  console.log(data);
});
