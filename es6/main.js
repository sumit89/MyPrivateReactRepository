// CONST & LET
let n = 'sumit';
console.log(n);
n = 'suman';
console.log(n);

// const p1 = 'sumit';
// p1 = 'suman';

const p2 = {
  name: 'sumit',
  age: 32,
};
p2.name = 'suman';
p2.age = 33;
console.log(p2.name);
console.log(p2.age);

const nums = [1, 2, 3, 4];
nums.push(5);
console.log(nums);

// ARROW FUNCTIONS
// function sayHello() {
//   console.log('Hello');
// }
// const sayHello = () => {
//   console.log('Hello');
// };
// const sayHello = () => console.log('Hello');
// sayHello();

// const sayHello = (name) => console.log('Hello ' + name);
const sayHello = (name) => console.log(`Hello ${name}`);
sayHello('sumit');

// FOREACH
const fruits = ['apples', 'oranges', 'grapes'];
fruits.forEach((fruit, index) => console.log(fruit));
// MAP
const singleFruits = fruits.map((fruit) => fruit.slice(0, -1).toUpperCase());
console.log(singleFruits);
// FILTER
const people = [
  { id: 1, name: 'sumit' },
  { id: 2, name: 'kumar' },
  { id: 3, name: 'suman' },
];
const filPeople = people.filter((person) => person.id != 2);
console.log(filPeople);
// SPREAD
const arr = [1, 2, 3];
// const arr2 = [arr, 4];
const arr2 = [...arr, 4];
console.log(arr2);

const person = {
  name: 'sumit',
  age: 32,
};
const newPerson = {
  ...person,
  email: 'abc@gmail.com',
};
console.log(newPerson);

const arr3 = [...arr.filter((num) => num !== 2)];
console.log(arr3);
// DESTRUCTURING
const profile = {
  name: 'sumit suman',
  address: {
    street: 'abc',
    city: 'deoghar',
  },
  hobbies: ['sdfsdf', 'sdfsdf', 'swerwe'],
};
const { name, address, hobbies } = profile;
console.log(name, address.street, hobbies[0]);

const { street, city } = profile.address;
console.log(street, city);
// CLASSES
// funcitonal components and class based components
class Person {
  constructor(name, age) {
    // console.log('constructor');
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello my name is ${this.name} and i am ${this.age}`;
  }
}
const person1 = new Person('sumit', 32);
console.log(person1.name, person1.age, person1.greet());
const person2 = new Person('suman', 33);
console.log(person2.name, person2.age, person2.greet());

// SUBCLASSES
class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }
  info() {
    return `${this.name} owes $${this.balance}`;
  }
}
const cus1 = new Customer('sumit', 32, 500);
console.log(cus1.name, cus1.age, cus1.balance, cus1.info());
// MODULES
