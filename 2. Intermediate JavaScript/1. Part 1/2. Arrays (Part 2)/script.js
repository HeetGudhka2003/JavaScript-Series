// Arrays in JavaScript

// Define an array of Marvel heroes.

const marvelHeroes = ["Thor", "Ironman", "Spiderman"];

// Define an array of DC heroes.

const DCHeroes = ["Batman", "Superman", "Flash"];

// Both concat and spread operator can be used to concatenate arrays, creating a new array without modifying the original arrays.

// Concatenate marvelHeroes and DCHeroes using concat method.

const allHeroes = marvelHeroes.concat(DCHeroes);

// Log the concatenated array.

console.log("The concatenated array is: ");

console.log(allHeroes);

// Concatenate marvelHeroes and DCHeroes using spread operator.

const allNewHeroes = [...marvelHeroes, ...DCHeroes];

// Log the new concatenated array.

console.log("The new concatenated array using spread operator is: ");

console.log(allNewHeroes);

// Create an array with nested arrays.

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9]];

// Use flat method with Infinity to flatten the nested arrays into a single array.

const newArray = anotherArray.flat(Infinity);

// Log the flattened array.

console.log("The new array using flat is: ");

console.log(newArray);

// Array.isArray() will return true if the argument is an array, otherwise false.

// Check if "Hitesh" is an array.

console.log(Array.isArray("Hitesh"));

// Array.from() will convert an iterable object or array-like object into an array.

// Convert a string into an array of its characters.

console.log(Array.from("Hitesh"));

// Convert an object into an array (only includes property values, not keys)

console.log(Array.from({name: "Hitesh"}));

// Create variables with scores

let score1 = 100;
let score2 = 200;
let score3 = 300;

// Array.of() will convert the arguments into an array.

// Create an array from the given scores

console.log(Array.of(score1, score2, score3));