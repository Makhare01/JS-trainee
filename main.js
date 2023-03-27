const result = document.getElementById("result");
const submit = document.getElementById("submit");

const form = document.getElementById("myForm");
const func = function (event) {
  event.preventDefault();
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;

  result.textContent = firstName + " " + lastName;
};
form.addEventListener("submit", func);

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function () {
  form.removeEventListener("submit", func);
  result.textContent = "";
});
