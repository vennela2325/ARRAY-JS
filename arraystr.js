const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num ** 2);
console.log(squares);
const num =[2,4,6,8];
const add = num.map(sum => sum+num.length);
console.log(add);

const words = ['apple', 'banana', 'cherry'];
const initials = words.map(word => word[0]);
console.log(initials); 
const emails = ['john@example.com', 'jane@test.com', 'doe@company.org'];
const domains = emails.map(email => email.split('@')[1]);
console.log(domains);
const digits = [1, 2, 3, 4, 5];
const odds = digits.filter(num => num % 2 !== 0);
console.log(odds); 
const word = ['cat', 'elephant', 'dog', 'rabbit' ,'buffalo'];
const longWords = word.filter(word => word.length > 4);
console.log(longWords);
const  employe =[{name:"ramesh",salary:50000},{name:"rakesh",salary:65000},{name:"raju",salary:45000}];
const amount =employe.filter(money => money.salary>=50000);
console.log(amount);
const people = [
    { name: 'Alice', age: 16 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 25 }
  ];
  const adults = people.filter(person => person.age > 18);
  console.log(adults); 
  const values = [0, 1, false, 'hello', '', null, undefined];
const truthyValues = values.filter(Boolean);
console.log(truthyValues); 
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(fruit => console.log(fruit));
const a = [1, 2, 3, 4];
let sum = 0;
a.forEach(num => sum += num);
console.log(sum); 
const numbernames = ['one', 'two', 'three'];
const newWords = [];
numbernames.forEach(word => newWords.push(word.toUpperCase()));
console.log(newWords); 
const students = [{ name: 'John', grade: 85 }, { name: 'Jane', grade: 90 }];
students.forEach(student => student.grade += 5);
console.log(students); 
const array = [10, 20, 30];
array.forEach((num, index) => console.log(`Index: ${index}, Value: ${num}`));





  






