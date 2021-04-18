import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// let newNumbers = numbers.map(x => {
//   return x * 2
// });
// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.
// let newNumbers = numbers.filter((num) => num > 10);
// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
// let newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   return accumulator + currentNumber;
// });
// console.log(newNumber);

//Find - find the first item that matches from an array.
// let newNumber = numbers.find(num =>
//   num > 10
// )
// console.log(newNumber)

//FindIndex - find the index of the first item that matches.
// let newNumber = numbers.findIndex((num) => num > 10);
// console.log(newNumber);

let newMeanings = emojipedia.map((obj) => obj.meaning.substring(0, 100));
console.log(newMeanings);
