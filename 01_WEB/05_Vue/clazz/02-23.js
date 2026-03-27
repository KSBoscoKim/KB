let obj1 = { name: '박문수', age: 29 };
let obj2 = { ...obj1, email: 'mspark@gmail.com' };
console.log(obj2);

const arr1 = [100, 200, 300];
const arr2 = ['hello', ...arr1, 'world'];

console.log(arr1);
console.log(arr2);
