const tetz = {
  id: 'xenosign',
  name: '이효석',
  email: 'xenosign@naver.com',
};

const tetzId = tetz.id;

const { id, name, email } = tetz;

const fruits = ['사과', '바나나', '수박'];

const [apple, banana, watermelon] = fruits;

console.log(fruits);
console.log(...fruits);

const newFruits = ['딸기', ...fruits];

console.log(...newFruits);

const person = { name: '홍길동', age: 30 };
const job = { title: '개발자', company: 'ABC Inc' };

// 동적바인딩,
const profile = { ...person, ...job, location: '서울' };

console.log(profile);
