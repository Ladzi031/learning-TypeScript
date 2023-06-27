var character = 'mario';
console.log(character);
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    console.log(input);
});
// typescript types
var fname = "ladzi031";
console.log(fname);
//fname = 32; ... will result in an error
var isBlackBelt = false;
// isBlackBelt = "yes" ... results in an error
isBlackBelt = true;
var age = 18;
var circumference = function (diameter) {
    return diameter * Math.PI;
};
console.log(circumference(5));
// arrays and objects
var arrayNames = ["john", "luigi", "yoshi"];
// arrayNames.push(234) // error
// arraynames[2] = 34; 
arrayNames.push("toad");
var numbers = [3, 34, 532, 523];
numbers.push(23);
numbers[3] = 342;
//numbers.push("234");
//numbers[1] = "234fxv";
// when declaring the array at the start... and put different data-type values in it... typeScript will not produce any errors when you want to later add values to the same array...
var mixedArray = ["james", 23, "farooq", 2342, 2334];
mixedArray.push(24);
;
mixedArray[0] = 242;
mixedArray.push("ronaldo");
mixedArray[mixedArray.length] = 3;
mixedArray.forEach(function (el) { return console.log(el); });
// objects
var ninja = {
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
var firstName;
var lastName;
var personAge;
var isLoggedIn;
personAge = 45;
//personAge = "twenty one";
isLoggedIn = true;
//isLoggedIn = "yes";
// arrays with Explicit-TYPES
var ninjaList = [];
ninjaList.push("messi");
//UNION TYPES
// with the syntax to state that this array accepts more than one data-type "union operator--- think of: OR" remeber... 
var mixed = []; // empty array
mixed.push("jacobs");
mixed.push(32);
mixed.push(false);
// UNION TYPES for normal variables
var uid;
uid = "324";
uid = 324;
//uid = false;
// objects
var ninjaOne;
ninjaOne = {
    name: "shaun",
    age: 324
};
var ninjaTwo;
ninjaTwo = {
    name: "holand",
    age: 32,
    beltColor: "yellow"
};
