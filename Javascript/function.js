//Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

//1. Function declaration
//function name(param1, param2) { body ... return;}
//one function === one thing
//naming: do something, command, verb
//e.g createCardAndPorint -> createCard, createPoint
//function is object in JS
function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello");

//2.Parameters
//premetive parameters: passed by value
//object parameters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

//3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("HI");

//4. Rest parameters( added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "ellie");

//5. Local scope(밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.)
let globalMessage = "global"; //global variable
function printMessage() {
  let message = "local";
  console.log(message); //local variable
  console.log(globalMessage);
}
printMessage();

//6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

//7. Early return, early exit
//bad
function upgradeUser(user) {
  if (user.point > 10) {
    //long upgrade logic...
  }
}

//good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  //long upgrade Logic ...
}

//First-class function
//함수는 다른 변수처럼 취급된다
//변수에 값으로 할당 가능
//다른 함수에 인자로 전달할 수 있습니다
//다른함수에 의해 반환될 수 있습니다.

//1. Function expression
//a function declaration can be called earlier than it is defined.(hoisted)
//a function expression is created when the execution reaches it.

const print = function () {
  //anonymous function
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//2. Callback function using function expression
function randomQuiz(answer, printY, printN) {
  if (answer === "love you") {
    printY();
  } else {
    printN();
  }
}
const printY = function () {
  console.log("YES");
};

const printN = function print() {
  console.log("NO");
};
randomQuiz("wrong", printY, printN);
randomQuiz("love you", printY, printN);

//Arrow function
//always anonymous

// const simplePrint = function () {
//   console.log("simplePrint");
// };

const simplePrint = () => console.log("simplePrint");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  //do something more
  return a * b;
};

//IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log("IIFE");
})();
