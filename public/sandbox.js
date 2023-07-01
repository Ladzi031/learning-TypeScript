import { Invoice } from "./classes/Invoice.js";
const character = 'mario';
//console.log(character);
const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
    //console.log(input);
});
// typescript types
let fname = "ladzi031";
//console.log(fname);
//fname = 32; ... will result in an error
let isBlackBelt = false;
// isBlackBelt = "yes" ... results in an error
isBlackBelt = true;
let age = 18;
const circumference = (diameter) => {
    return diameter * Math.PI;
};
//console.log(circumference(5));
// arrays and objects
let arrayNames = ["john", "luigi", "yoshi"];
// arrayNames.push(234) // error
// arraynames[2] = 34; 
arrayNames.push("toad");
let numbers = [3, 34, 532, 523];
numbers.push(23);
numbers[3] = 342;
//numbers.push("234");
//numbers[1] = "234fxv";
// when declaring the array at the start... and put different data-type values in it... typeScript will not produce any errors when you want to later add values to the same array...
let mixedArray = ["james", 23, "farooq", 2342, 2334];
mixedArray.push(24);
;
mixedArray[0] = 242;
mixedArray.push("ronaldo");
mixedArray[mixedArray.length] = 3;
mixedArray.forEach(el => {
    //console.log(el)
});
// objects
let ninja = {
    name: "ladzi031",
    belt: "black",
    age: 21
};
//ninja.age = "32";
ninja.age = 22;
// cannot add a new property on the fly, once initial object has been declared...
//ninja.skills = ["jumping", "fighting", "driving-fast"];
// when using a new object with the same name... it has to take on the exact structure of the original object... same property-names
ninja = {
    name: "james",
    belt: "white",
    age: 89
};
// for the above code... the data-type is infered automatically
// Explicit TYPES
let firstName;
let lastName;
let personAge;
let isLoggedIn;
personAge = 45;
//personAge = "twenty one";
isLoggedIn = true;
//isLoggedIn = "yes";
// arrays with Explicit-TYPES
let ninjaList = [];
ninjaList.push("messi");
//UNION TYPES
// with the syntax to state that this array accepts more than one data-type "union operator--- think of: OR" remeber... 
let mixed = []; // empty array
mixed.push("jacobs");
mixed.push(32);
mixed.push(false);
// UNION TYPES for normal variables
let uid;
uid = "324";
uid = 324;
//uid = false;
// objects
let ninjaOne;
ninjaOne = {
    name: "shaun",
    age: 324
}; // once declared you cannot add new properties to the object
let ninjaTwo;
ninjaTwo = {
    name: "holand",
    age: 32,
    beltColor: "yellow"
};
// dynamics types... "any"
let randomNumber = 23;
randomNumber = true;
randomNumber = "hello";
let mixedRandom = []; // empty array of type "any"
mixedRandom.push(32);
mixedRandom.push("hello world!");
mixedRandom.push(false);
//console.log(mixedRandom);
let randomNinja;
randomNinja = { name: "john", age: 454 }; // acceptable
randomNinja = { name: "mike", age: "five" }; // also acceptable because of the dynamic data-type...
// changed the file structure for better workflow and some tsConfig.json file 
// outDir and rootDir also include propeties for...
// a few usefull commands:
//tsc
//tsc --init
//tsc -w 
// function basics
let greet = () => {
    //console.log("hello, world");
};
let greet2; // variable greet2 is type of function now...
greet2 = () => {
    //console.log("hello world again");
};
const add = (a, b, c) => {
    // console.log(a + b);
    //console.log(c)
};
add(3, 5); // compiles succesfully...
add(3, 56, 54); // also compiles successfully...
// the "?" question mark indicates that third variable is OPTIONAL...
const subtract = (a, b, c) => {
    //console.log(a - b);
    //console.log(c);
    // function also accept union-types in the parameter list...
};
const addAgain = (a, b, c = 45) => {
    return a + b + c;
    // third parameter becomes OPTIONAL...
};
let results = addAgain(34, 53); // the type is infered
// results = "some string"; // this won't work...
let results2 = addAgain(323, 453, 345);
//console.log(results2);
// return-type
const minus = (a, b) => {
    return a - b;
    // function with a return-type specified...
};
const minus2 = (a, b) => {
    // console.log(a - b);
    // no return type...
};
let test1;
test1 = "this is a types";
let student1;
student1 = {
    name: "ryan",
    studentNumber: 34242,
    courseName: "history"
};
let studentArray = []; // empty array of type studentObject
studentArray.push(student1);
const someFunc = (arg) => {
    arg.forEach(learner => {
        // console.log(learner.name)
    });
};
someFunc(studentArray);
const anotherFunc = (value) => {
    //console.log(value);
};
anotherFunc(test1);
// function signatures
let greet3; // this is not specific...
let hello1; // function that is a little more specific...
hello1 = (name, greet) => {
    // console.log(`${name} is saying ${greet}`);
};
hello1("lucas", "Ola!");
let calc; // function signature a little more specific again, basically declaring it
calc = (num1, num2, op) => {
    return op === "add" ? num1 + num2 : num1 - num2;
};
calc(10, 5, "minus"); // function calling
//console.log(anchor2.href); // results in an error because the element might not exists in the DOM in the first place!
const anchor = document.querySelector('a'); // exclamation mark tells tsc that we are certain that the anchor element exists in the DOM...
const anchor2 = document.querySelector("a"); // anchor2 data type is HTMLAnchorElement | null
// console.log("testing!");
// classes
let inovice1 = new Invoice("james", "work on the james project", 234);
let inovice2 = new Invoice("mike", "work on the mike project", 500);
let invoiceArray = [];
invoiceArray.push(inovice1);
invoiceArray.push(inovice2);
invoiceArray.forEach(inv => {
    // console.log(inv.client, inv.format());
});
const someone = {
    name: "luigi",
    age: 34,
    speak(text) {
        // console.log(text);
    },
    spend(amount) {
        //console.log(amount);
        return amount;
    }
};
const greetPerson = (person) => {
    // console.log("hello ", person.name);
};
greetPerson(someone);
// generics
