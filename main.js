const fetchAPI = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();

  console.log({ response });
};

fetchAPI();

const person = {
  name: "Zuriko",
  surname: "Davitadze",
  age: 20,
  haveBMW: true,
};

const person2 = {
  name: "Toka",
  surname: "Kartsivadze",
  age: 22,
  haveBMW: false,
};

const { name, surname } = person;
const { name: name2, surname: surname2 } = person2;

const array = [person, person2, person2];
const { name: name3, surname: surname3 } = array.find(
  (user) => user.name === "Zuriko"
);

const [third] = array;

// Spread operators

const arr1 = ["a", "b", "c", "d"];
const arr2 = [1, 2, 3, 4];

const arr = [...arr1, ...arr2];

console.log("arr: ", arr);

// ...rest
const obj = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  person: {
    ...person,
    name: "Makhare",
    dzmakaci: person2,
  },
};

console.log(obj.person);

const {
  first,
  second,
  person: {
    name: personName,
    surname: personSurname,
    dzmakaci: { name: n1, ...rest },
  },
} = obj;

const info = {
  name: "jano",
  surname: "surmanidze",
};

const otherInfo = {
  age: 13,
  job: "developer",
};

console.log({ ...info, ...otherInfo });

// console.log(personName, personSurname, rest);
