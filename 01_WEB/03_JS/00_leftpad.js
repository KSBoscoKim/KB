const leftPad = function (str, len, ch) {
  if (str.length >= len) {
    return str;
  }
  if (ch === undefined) {
    ch = ' ';
  }
  if (ch === 0) {
    ch = '0';
  }

  str = String(str);

  for (let i = 0; i < len; i++) {
    str = ch + str;
  }

  return str;
};

console.log(leftPad('abc', 5, '*'));
console.log(leftPad('123', 2, '0'));
console.log(leftPad('7', 4, '0'));
console.log(leftPad('hi', 5));
