// Arrow functions

const myFunc = function () {
  console.log("This is simple function");
  const a = 15;
  console.log('This is "this": ', this);
  return "Hello";
};

const obj = {
  name: "jano",
  surname: "gazashvili",
  getMyName: () => this,
};
console.log(obj.name);
console.log(obj.getMyName());
const myArrowFunc = () => "Hello" + 898;

// console.log(myArrowFunc())
myFunc();

// Promises
const promiseFunc = () =>
  new Promise((resolve, reject) => {
    const isValiBack = false;
    if (isValiBack) {
      resolve("RESOLVED!");
    } else {
      reject("REJECTED!");
    }
  });

promiseFunc()
  .then((value) => {
    console.log("Inside then:", value);
  })
  .catch((reason) => {
    console.log("Inside catch:", reason);
  });

const myPromise = promiseFunc();

// Async await
const executePromise = async () => {
  try {
    const value = await myPromise;
    console.log("Inside try", value);
  } catch (message) {
    console.log("Inside try (catch): ", message);
  }
};

executePromise();

// Fetch API
console.log("-----------------------------------------------");

const getToDos = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((value) => value);

  console.log("result: ", result);

  return result;
};
getToDos();

const secondFunc = async () => {
  try {
    const res = await getToDos();
    console.log("in second func:", res);
  } catch (error) {
    console.log("ERROR!", error);
  }
};
secondFunc();
