//Objects
//자바스크립트 데이터 유형중 하나이다.
//관련데이타 및 기능 모음
//Javascript의 거의 모든 객체는 object의 인스턴스 입니다.
//object = {key:value}

//1.literals and properties
const obj1 = {}; //"object literal" syntax
const obj2 = new Object(); //"object constructor" syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 };
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

//2.Computed properties
//key should be always string
console.log(ellie.name); // 코딩하는 순간 필요한 키값을 가져오고싶을때
console.log(ellie["name"]); //어떠한 키를 쓰고 싶은지 모를때
ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, "name");
printValue(ellie, "age");

//3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
// const person4 = makePerson("ellie", 30);
const person4 = new Person("ellie", 30);
console.log(person4);

// function makePerson(name, age) {
//   return {
//     name,
//     age,
//   };
// }

//4.Constructor function
function Person(name, age) {
  //this = {}
  this.name = name;
  this.age = age;
  //return this
}

//5. in operator: property existence check (key in obj)
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);
console.log(ellie.random);

//6. for..in vs for..of
//for (key in obj)
console.clear();
for (key in ellie) {
  console.log(key);
}

//for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
  console.log(value);
}

//7. Fun cloning
//Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "ellie", age: "20" };
const user2 = user;
user2.name = "coder";
console.log(user);

//old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

//another way
const user4 = {};
Object.assign(user4, user);
console.log(user4);

//another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
