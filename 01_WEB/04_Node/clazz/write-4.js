const fs = require('fs');

let content = `
========================================
새로운 내용 추가
========================================
`;

fs.writeFileSync(__dirname + '/text-1.txt', content, { flag: 'a' });
