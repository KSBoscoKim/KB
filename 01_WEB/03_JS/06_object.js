const ironMan = {
  name: 'Tony Stark',
  age: 34,
  height: 174,
  weight: 65,
};

for (let key in ironMan) {
  console.log(`key 는 ${key} 이고, 값은 ${ironMan[key]}`);
}

ironMan.name;
ironMan['name'];
