"use strict";

//array

//1.Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2.Index position
const fruits = ["apple", "banana"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits.length - 1);

//3.Looping over an array
//print all fruits
//a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

//c. forEach
fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array);
});

//4. Additioin, deletion, copy
//push: add an item to the end
fruits.push("straw", "peach");
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the beginning
fruits.unshift("straw", "lemmon");
console.log(fruits);

//shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

//note!! shift,unshift are slower than pop, push
//splice:remove an item by index position
fruits.push("straw", "peach", "lemon");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, "kiwi", "water");
console.log(fruits);

//combine two arrays
const fruits2 = ["mogwa", "coconut"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5.Searching
//find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("apple"));
console.log(fruits.indexOf("water"));

//includes
console.log(fruits.includes("melon"));
console.log(fruits.includes("peach"));

//lastIndexOf
console.clear();
fruits.push("apple");
console.log(fruits);
console.log(fruits.indexOf("apple"));
console.log(fruits.lastIndexOf("apple"));
