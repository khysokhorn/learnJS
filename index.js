const { operator } = require("./operator");
console.log("hello world");

const a = 10;

let person = { first: "name" };

// console.log(person);

console.log("value of a vaible: ", a);

let cc = { firstName: "sok", lastName: "Dara" };

console.log(cc);

let name = "sokhorn";
let lastname = "Dara";

let fullName = `Here is the full name ${name}-${lastname}`;

console.log(fullName);

let num = 1n;

// const result = num + a;

// console.log(result);

const value1 = Symbol("hello");
const value2 = Symbol("hello");

const isEqual = value1 == value2;

let aa = (1, 2, 3, 4);
let bb = 5 > 3 ? "sucess" : "Error";

console.log(aa);
console.log(bb);
console.log(isEqual);

// Single comment type
/*
Multiline comment 
*/

/**
 * Adds two numbers
 * @param {Number} num1
 * @param {Number} um
 * @return {Number} sum
 */
function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(1, 1));
d = 5;
console.log(d);
var d;

// program to find the factorial of a number
function factorial(x) {
  // if number is 0
  if (x === 0) {
    return 1;
  }

  // if number is positive
  else {
    return x * factorial(x - 1);
  }
}

num = 500;

// calling factorial() if num is non-negative
if (num > 0) {
  let result = factorial(num);
  console.log(`The factorial of ${num} is ${result}`);
}

var student = {
  name: "sok",
  lastName: "dara",
  grade: "B",
  age: 32,
  fullName: function () {
    return this.name + "-s" + this.lastName;
  },
};

console.log(student.name, student.grade, student.age);

console.log(student.fullName());

student.register = function registe() {
  console.log("Register student");
};

student.register();

function Person1() {
  this.name = "sok";
  this.age = 23;
}
const personTest = new Person1();

console.log(personTest.name, personTest.age);

personTest.getFullName = function getFullname() {
  return `Now ${personTest.name} is ${personTest.age} years old`;
};

console.log(personTest.getFullName());
Person1.prototype.gender = "Male";
console.log(personTest.gender);
// ===========><=========== //

const student1 = {
  name: "Monica",
  get getName() {
    return `her name is ${this.name}`;
  },
  set changeName(name) {
    this.name = `${name}`;
  },
};

student1.changeName = "Monika";
console.log(student1.getName);
// ===========> JS6 <=========== //
let x = function (x, y) {
  return x * y;
};
// let x = (x, y) => x * y

console.log(x(2, 3));

function defualtParama(x, y = 5) {
  return x + y;
}
console.log(defualtParama(3, (y = 10)));

const personEs6 = {
  nameEs5: "sok",
  age: 32,
  grade: "B",
};

let { nameEs5, age, grade } = personEs6;
console.log(nameEs5, age, grade);
// =============
operator("sok", 32);
