if (fs.existsSync(__dirname + '/test-1.txt')) {
  console.log('file already exist');
} else {
  fs.writeFileSync(__dirname + '/test-1.txt', data);
  console.log('text-1.txt is saved!');
}