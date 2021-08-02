"use strict";
let myName = "John";
let myAge = 25;
let isHungry = false;
let myArray = [1, 2, 3];
let studentId = 1;
studentId = "1";
let myObject = {
    name: "John",
    age: 25,
};
let myStringOrNumber = "12222222222";
myStringOrNumber = 1;
let person = {
    name: "John",
    age: 25,
    isHungry: false,
    hobbies: ["Sports", "Cooking"],
};
let person2 = {
    name: "mark",
    age: 25,
    isHungry: true,
};
// Array
const numbers = [1, 2, 3];
const numbers2 = [1, 2, 3];
const anyType = [1, "2", true];
const myArray2 = ["Sport", "Cooking"];
// console.log(myArray2, numbers2, anyType, numbers);
//  array of multiple variable names
const number3 = [
    {
        name: "John",
        age: 25,
        isHungry: false,
        // hobbies: ["Sports", "Cooking"],
    },
    {
        name: "Mark",
        age: 25,
        isHungry: true,
    },
    1,
    [1, 2, 3, 4],
    "Hey whatever",
    {
        name: "John",
        age: 25,
        isHungry: false,
        hobbies: ["Sports", "Cooking"],
        dude: {
            name: "John",
            age: 25,
            isHungry: false,
            hobbies: ["Sports", "Cooking"],
        },
    },
];
console.log(number3);
//function 
const greeting = (name) => {
    console.log("Hello", name);
};
greeting("John");
const add = (a, b) => {
    return a + b;
};
console.log(add(1, 2));
const introduce = ({ name, age, hobbies }) => {
    console.log(`Hello ${name} your age is ${age} and ${hobbies}`);
};
introduce({
    name: "Atik",
    age: 22,
    isHungry: false,
    hobbies: ["Sports", "Cooking"],
});
const getArray = (arr) => {
    return arr;
};
console.log(getArray(['1', '2', '3']));
