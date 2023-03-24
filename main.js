console.log("Hello");
const name = "Makhare";
const surname = "Makharadze";
const num = 123; // Number
const isOpen = false; // Boolean
const nullType = null; // Null
let NotDefined; // Undefined

// Object Person
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
};

function getPersonFullName(person) {
  // person
  return person.firstName + " " + person.lastName;
} // Will return 'John Doe'

console.log(person.parents.name); // Roin

// Array
let cars = ["BMW", "TOYOTA", "OPEL", { make: "AUDI", year: 2022 }];
cars.push("name");
cars.pop();

console.log(cars[4]);
console.log(cars.length);

const num1 = 2;
const num2 = 4;

const Sum = num1 + num2;
const diff = num1 - num2;
const sub = num1 / num2;
const balance = num1 % num2;

// Functions
function sum(a, b) {
  return a + b;
}

console.log('Sum: ', sum(2, 4));

const numOne = 5;
const numTwo = "5.0";

if (numOne > numTwo) {
  console.log("High");
} else if (numOne < numTwo) {
  console.log("Low");
} else {
  console.log("equal");
}

if (numOne == numTwo) console.log("EQUAL with ==");
if (numOne === numTwo) console.log("EQUAL with ===");

function isOdd(a, b) {
  if ((a + b) % 2 === 0) {
    return false;
  }

  return true;

  console.log("Hi");
}

console.log("isOdd: ", isOdd(2, 5));