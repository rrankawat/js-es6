// -------- CONST & LET --------

/* const name = 'John';
name = 'Jack'; */

/* let name = 'John';
name = 'Jack';
console.log(name); */

// const test;
// let test;

/* const person = {
  name: 'John',
  age: 33
};

person = {
  name: 'Jack'
};

person.name = 'Jack';
console.log(person); */

/* const nums = [1, 2, 3, 4];
nums.push(5);

console.log(nums); */

// -------- ARROW FUNCTIONS --------

/* function hello() {
  console.log('Hello');
} */

/* const hello = () => {
  console.log('Hello');
}; */

// const hello = () => console.log('Hello');
// const hello = name => console.log(name);
// const hello = name => console.log('Hello ' + name);
// const hello = name => console.log(`Hello ${name}`);

// hello('Jack');

/* const hello = (name, greet) => console.log(name);
hello('Jack', 'Good Morning'); */

// --------- FOREACH ---------
/* Foreach doesn't return any value, it just loop through (iterate) the items */

// const fruits = ['Apples', 'Oranges', 'Grapes'];

// fruits.forEach((value, index) => console.log(value));

// ---------- MAP ----------
/* Map is similar like forEach, except it returns value also we are able to change/manipulate the values as well */

/* const fruit = fruits.map(value => value.slice(0, -1).toUpperCase());
console.log(fruit); */

// ---------- FILTER ----------
/* Filter is similar to forEach & Map. It's high order array method and it is to return array with things filtered out. */

/* const people = [
  { id: 1, name: 'Karen' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Sharon' }
];

const people2 = people.filter(value => value.id !== 2);
console.log(people2); */

// ---------- SPREAD -----------

/* const arr = [1, 2, 3];
const arr2 = [...arr, 4];
const arr3 = [...arr.filter(value => value !== 2)];

const person = {
  name: 'Brad',
  age: 36
};

const person2 = {
  ...person,
  email: 'brad@gmail.com'
};

console.log(arr3); */

// ---------- DESTRUCTURING ----------

/* const profile = {
  name: 'John Doe',
  address: {
    street: '40 Main st.',
    city: 'Boston'
  },
  hobbies: ['movies', 'music']
};

const { name, address, hobbies } = profile;
const { street, city } = profile.address;

console.log(street, city); */

// --------- CLASSES ----------

/* class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age}.`;
  }
}

const person1 = new Person('John', 33);
const person2 = new Person('Kara', 28); */

// ---------- SUBCLASSES ----------
/* class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes $${this.balance}.00`;
  }
}

const customer1 = new Customer('Kevin', 32, 300);

console.log(customer1.info()); */

// --------- MODULES ---------

// file 1 (file1.js)
/* export const name = 'Jeff';
export const nums = [1, 2, 3];
export default Person; */

// file 2 (file2.js)
/* import { name, nums } from './file1';
import Person from './file1';

console.log(name); */
