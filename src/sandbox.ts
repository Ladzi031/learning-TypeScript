import { Invoice } from "./classes/Invoice.js";
const character = 'mario';
//console.log(character);

const inputs = document.querySelectorAll('input');
inputs.forEach((input)  => {
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


 const circumference = (diameter: number) => {
    return diameter * Math.PI;
 }
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
  mixedArray.push(24);;
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
  }
  //ninja.age = "32";
  ninja.age = 22;

  // cannot add a new property on the fly, once initial object has been declared...
  //ninja.skills = ["jumping", "fighting", "driving-fast"];

  // when using a new object with the same name... it has to take on the exact structure of the original object... same property-names
  ninja = {
    name: "james",
    belt: "white",
    age: 89
  }
  // for the above code... the data-type is infered automatically



  // Explicit TYPES
  let firstName: string;
  let lastName: string;
  let personAge: number;
  let isLoggedIn: boolean;

  personAge = 45;
  //personAge = "twenty one";

  isLoggedIn = true;
  //isLoggedIn = "yes";

  // arrays with Explicit-TYPES
  let ninjaList:string[] = [];
  ninjaList.push("messi");


  //UNION TYPES
  // with the syntax to state that this array accepts more than one data-type "union operator--- think of: OR" remeber... 
  let mixed:(string|number|boolean)[] = []; // empty array
  mixed.push("jacobs");
  mixed.push(32);
  mixed.push(false);


  // UNION TYPES for normal variables
  let uid: (string|number);
  uid = "324";
  uid = 324;
  //uid = false;



  // objects
  let ninjaOne: object;
  ninjaOne = {
    name: "shaun",
    age: 324
  } // once declared you cannot add new properties to the object

  let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
  }

  ninjaTwo = {
    name: "holand",
    age: 32,
    beltColor: "yellow"
  }

  // dynamics types... "any"
  let randomNumber: any = 23;
  randomNumber = true;
  randomNumber = "hello";

  let mixedRandom: any[] = []; // empty array of type "any"
  mixedRandom.push(32);
  mixedRandom.push("hello world!");
  mixedRandom.push(false);
  //console.log(mixedRandom);

  let randomNinja: { // describing the structure of the object here... 
    name: any,
    age: any
  };
  randomNinja = { name: "john", age: 454 }; // acceptable
  randomNinja = { name: "mike", age: "five"}; // also acceptable because of the dynamic data-type...

  // changed the file structure for better workflow and some tsConfig.json file 
  // outDir and rootDir also include propeties for...

  
  // a few usefull commands:
  //tsc
  //tsc --init
  //tsc -w 

  // function basics

   let greet = () => {
    //console.log("hello, world");
   }

   let greet2: Function; // variable greet2 is type of function now...

   greet2 = () => {
    //console.log("hello world again");
   }

   const add = (a: number, b: number, c?:number) => {
    // console.log(a + b);
    //console.log(c)
   }
   add(3,5); // compiles succesfully...
   add(3,56,54); // also compiles successfully...
   // the "?" question mark indicates that third variable is OPTIONAL...

   const subtract = (a: number, b: number, c: number | string) => {
    //console.log(a - b);
    //console.log(c);
    // function also accept union-types in the parameter list...
   }
   const addAgain = (a: number, b:number, c:number = 45) => {
    return a + b + c;
    // third parameter becomes OPTIONAL...
   }
    let results = addAgain(34,53); // the type is infered
    // results = "some string"; // this won't work...
   
   let results2 =  addAgain(323, 453,345);
   //console.log(results2);

   // return-type
   const minus = (a:number, b:number): number => {
    return a - b;
    // function with a return-type specified...
   }
   const minus2 = (a:number, b:number): void => {
    // console.log(a - b);
    // no return type...
   }
   
   minus(6,2);
   minus2(65,7);

   // type aliases
   type studentDetails = number | string;
   let test1: studentDetails;
   test1 = "this is a types";
   type studentModel = {
    name:string,
    studentNumber:number,
    courseName:string
   };
   let student1:studentModel;
   student1 = {
    name:"ryan",
    studentNumber: 34242,
    courseName: "history"
   };

   let studentArray: studentModel[] = []; // empty array of type studentObject
   studentArray.push(student1);


   const someFunc = (arg: studentModel[]): void => { // function taking a 
    arg.forEach(learner => {
     // console.log(learner.name)
    });
   }
   someFunc(studentArray);

   const anotherFunc = (value: studentDetails): void => {
    //console.log(value);
   }
   anotherFunc(test1);
  

   // function signatures
   let greet3:Function;  // this is not specific...

   let hello1: (x:string, y: string) => void;  // function that is a little more specific...


   hello1 = (name:string, greet:string): void => {
   // console.log(`${name} is saying ${greet}`);
   } 
   hello1("lucas", "Ola!");


   let calc: (x:number, y:number, z:string) => number; // function signature a little more specific again, basically declaring it

   calc = (num1: number, num2: number, op:string):number => { // function definition
      return op === "add" ? num1 + num2 : num1 - num2;
   } 
calc( 10, 5, "minus"); // function calling


//console.log(anchor2.href); // results in an error because the element might not exists in the DOM in the first place!

const anchor = document.querySelector('a')!; // exclamation mark tells tsc that we are certain that the anchor element exists in the DOM...
const anchor2 = document.querySelector("a"); // anchor2 data type is HTMLAnchorElement | null
// console.log("testing!");


// classes
let inovice1 = new Invoice("james", "work on the james project", 234);
let inovice2 = new Invoice("mike", "work on the mike project", 500);


let invoiceArray: Invoice[] = [];
invoiceArray.push(inovice1);
invoiceArray.push(inovice2);

 

 invoiceArray.forEach(inv => {
   // console.log(inv.client, inv.format());
}); 
 


// interfaces...
interface IsPerson {
  name: string,
  age: number,

  //more like a function signature here...
  speak(a: string):void,
  spend(a: number): number    
}

const someone: IsPerson = {
  name:"luigi",
  age: 34,
  speak(text: string):void {
     // console.log(text);
  },
  spend(amount:number):number {
      //console.log(amount);
      return amount;
  }
}
const greetPerson = (person: IsPerson): void => {
 // console.log("hello ", person.name);
}
greetPerson(someone);


// generics





