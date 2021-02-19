"use strict";

//Javascript is synchronous.
//Execute the code block by orger after hoisting
//hoisting: var, function declaration

console.log("1");
setTimeout(function () {
  console.log("2");
}, 1000);
console.log("3");

//Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("Hello"));

//Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

//Callback hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "corder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not Found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your ID");
const password = prompt("enter your Password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello! ${userWithRole.name}, you have a ${userWithRole.role}role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(err);
  }
);

//콜백 체인의 문제점
//1.가독성이 떨어진다
//2.비즈니스 로직을 한눈에 알아보기도 힘들다
//callback-to-promise에서 수정
