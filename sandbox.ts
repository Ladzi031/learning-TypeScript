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