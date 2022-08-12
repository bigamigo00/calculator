let number1 = prompt("first number");
let math = prompt("*+, -, * ili /");
let number2 = prompt("second number");

if (math == "+") {
  let answer = confirm(+number1 + +number2);
} else if (math == "-") {
  let answer = confirm(number1 - number2);
} else if (math == "*") {
  let answer = confirm(number1 * number2);
} else if (math == "/") {
  let answer = confirm(number1 / number2);
}
