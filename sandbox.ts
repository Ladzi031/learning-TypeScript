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