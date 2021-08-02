let myName: string = "John";
let myAge: number = 25;
let isHungry: boolean = false;
let myArray: number[] = [1, 2, 3];
let studentId: number | string = 1;
studentId = "1";

let myObject: object = {
  name: "John",
  age: 25,
};

type stringOrNumber = string | number;
let myStringOrNumber: stringOrNumber = "12222222222";
myStringOrNumber = 1;
// console.log(myStringOrNumber);

// object
interface Person {
  name: string;
  age: number;
  isHungry: boolean;
  hobbies?: string[];
}

let person: Person = {
  name: "John",
  age: 25,
  isHungry: false,
  hobbies: ["Sports", "Cooking"],
};
let person2: Person = {
  name: "mark",
  age: 25,
  isHungry: true,
};

// Array
const numbers: number[] = [1, 2, 3];
const numbers2: Array<number> = [1, 2, 3];
const anyType: any[] = [1, "2", true];
const myArray2: string[] = ["Sport", "Cooking"];
// console.log(myArray2, numbers2, anyType, numbers);
//  array of multiple variable names


const number3: (Person | number | string | number[] | object)[] = [
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
const greeting = (name: string): void => {
  console.log("Hello", name);
}
greeting("John");

const add = (a: number, b: number): number => {
  return a + b;
}
console.log(add(1, 2));

const introduce = ({ name, age,hobbies}: Person): void => {
  console.log(`Hello ${name} your age is ${age} and ${hobbies}`);
}
introduce({
  name: "Atik",
  age: 22,
  isHungry: false,
   hobbies: ["Sports", "Cooking"],
});


const getArray = <Type>(arr: Type[]): Type[] => {
  return arr;
}

 console.log(getArray<string>(['1', '2', '3']));
  