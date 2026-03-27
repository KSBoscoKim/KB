function youKnow(name, cb) {
  cb(name);
}

function sayMyName(name) {
  console.log(`엄.... 제 이름은 ${name} 입니다`);
}

youKnow('이효석', sayMyName);
youKnow('이효석', function (name) {
  console.log(`저는 ${name}이고, 취미는 자전거를 탑니다!`);
});
