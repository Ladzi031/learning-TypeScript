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
