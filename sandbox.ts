const character = 'mario';
console.log(character);

const inputs = document.querySelectorAll('input');
inputs.forEach((input)  => {
    console.log(input);
});

// typescript types

let fname = "ladzi031";
console.log(fname);
//fname = 32; ... will result in an error

 let isBlackBelt = false;
 // isBlackBelt = "yes" ... results in an error
 isBlackBelt = true;

 let age = 18;


 const circumference = (diameter: number) => {
    return diameter * Math.PI;
 }
 console.log(circumference(5));


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
  mixedArray.forEach(el => console.log(el));

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
  console.log(mixedRandom);

  let randomNinja: { // describing the structure of the object here... 
    name: any,
    age: any
  };
  randomNinja = { name: "john", age: 454 }; // acceptable
  randomNinja = { name: "mike", age: "five"}; // also acceptable because of the dynamic data-type...
  