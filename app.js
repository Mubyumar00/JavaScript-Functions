// JS Function -> A block of codes designed to perform certain tasks, it is executed when called or invoked.

// Types Of Functions.

// Function Declaration.

// Function declaration
function functionName(param) {
  statement;
}

// function expression

// const functionName = function () {

// }

// arrow function es6

const add = (a, b) => {
  return a + b;
};
console.log(add(5, 4));

// class try using function declaration
function multiply(number) {
  return number * number;
}

const result = multiply(5);
console.log(result);

// class try using function declaration
function sum() {
  return 9 + 5;
}

console.log(sum());

// class try using function declaration with two parameters
function subtraction(a, b) {
  return a - b;
}

const subResult = subtraction(5, 4);
console.log(subResult);

// try 2 using a direct method
function subt(c, d) {
  return c - d;
}
console.log(subt(9, 5));

// class try using function declaration
function sayHi(name) {
  console.log(`Hello ${name}`);
}
sayHi("Emmanuel");
sayHi("Rodiat");
sayHi("Chapo");
sayHi("Teddy");
sayHi("Opera mini");

// class try using arrow function

const cohorts = (tutor, students) => {
  const tutor1 = "Lagbaja";
  const tutor2 = "Emmanuel";
  const students1 = "Team Lead";
  const students2 = "Alamu";
  return console.log(
    `Mr. ${tutor1} is the tutor of the year, while Mr. ${students2} is part of the cohorts`
  );
};
cohorts();

const Tester = () => {
  console.log(3 + 5);
};
Tester();

const logAge = (name, age) => {
  console.log(`${name} is ${age} years old.`);
};
logAge("Joe", 35);

const select = () => {
  const sentence = console.log("I love the world!!!");
  return sentence;
};
select();

// SCOPE
const nameTwo = "boi"; // GLOBAL SCOPE
const logName = () => {
  console.log(nameTwo);
};
logName();

const globalVar = "I am Global"; // Global Scope
function accessGlobal() {
  console.log(globalVar);
}
accessGlobal();

// Class exercise

const example = () => {
  let LocalScope = "Local Champion";
  console.log(LocalScope);
};
example();

// Class Example

const sumFunction = () => {
  let name = "Yemi";
  console.log(name);
  const anotherFunction = () => {
    console.log(name);
  };
  anotherFunction();
};
sumFunction();

// Another Example
const someFunction2 = () => {
  let name = "John";
  console.log(name);
};

const anotherFunction1 = () => {
  let name = "Kanaz";
  console.log(name);
};
someFunction2();
anotherFunction1();

// Block Scope
if (true) {
  let blockscope = " i am blocked";
  console.log(blockscope);
}

var myFunc = function () {
  console.log("Hi");
};
myFunc();

var x = 10;
function greeting() {
  console.log(greeting);
}

// Assigning value to parameter
function division(c, d = 7) {
  return c / d;
}
console.log(division(21));

// === Function Expression ===
const greetings = function sayHi(name) {
  console.log(`Hello ${name}`);
};
greetings("Teddy");

// function expression to calculate sum of two numbers

const sums = function sumTotal(x, y) {
  return x + y;
};

console.log(sums(3, 5));

// Arrow Function
const arrow = (x, y) => x * y;
console.log(arrow(3, 5));

// Arrow Function example 2
const example2 = (tutor, student) => {
  const tutor1 = "OG";
  const tutor2 = "Teddy";

  const student1 = "Muby";
  const student2 = "Rodiat";

  return console.log(
    `Mr ${tutor1} and  ${tutor2} are the tutors, while ${student1} and ${student2} is part of the cohorts`
  );
};

example2();


// Global Scope - when a variable is declared at he top. the variable can be called anywhere below the the global declared variable.
const scope = 2;

const testScope = () => {
  const b = 10
  console.log(scope + b);
  
}
testScope();


let num = 5;

const testNum = () => {
  console.log(num);
  num = 10  
}

testNum()
console.log(num);


// Local Scope - this when variables are declared within the function block
function LocalScope() {
  const name = "OG"
  const isPresent = true;
  const potBellied = true;
  
  console.log(name, isPresent, potBellied);
  
}
LocalScope()

// local Scope example
const someFunction = () => {
  const name = "Yemi";

  const anotherFunction = () => {
    console.log(name);
    
  }
  anotherFunction()
}
someFunction()


// self try 
const try1 = () => {
  const firstTry = "Muby";

  const tryHard = () => {
    console.log(firstTry);
    
  }
  tryHard()
}
try1()

// Hoisting main 2 benefits are 1- it helps the interpreter to be faster and more efficient and 2- Allows you to use function declarations before they are defined. this allows your code to be organized regardless of where they are called as long as they are within the scope block.
hoistedFunction()

function hoistedFunction() {
  console.log("I am hoisted");
  
}


console.log(myHoistedFn(2,5));
function myHoistedFn(a,b) {
  return a - b;
}

// CLOSURE ---> 