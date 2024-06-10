// For of Loop in JavaScript using Arrays

let arr = [1, 2, 3, 4, 5];

// Iterating through each element of the array

for (const num of arr) {

    // Printing each element

    console.log(num);
}

// For of Loop in JavaScript using Strings

let str = "Hello World!";

// Iterating through each character of the string

for (const greet of str) {

    // Printing each character

    console.log(greet);
}

// For of Loops are only iterable with arrays, map and set objects but not with regular objects.

// Maps in JavaScript - It stores unique values for keys. It is an iterable object. It prints the output in the same order as it was inserted.

// Set & Map both are used to store unique values but the main difference is the key value associated with the map can be duplicated and if the same exists before then it will be overwritten.

const map = new Map();

map.set('IN', "India");

map.set('US', "United States of America");

map.set('FR', "France");

console.log(map);

map.set(1);

map.set(2);

console.log(map);

// Iterating through each key-value pair in the map

for (const [country, value] of map) {

    // Printing each key-value pair

    console.log(country, ':- ', value);
}

// For in Loops in JavaScript with objects

const languageObject = {

    js: "JavaScript",

    py: "Python",

    rb: "Ruby",

    cpp: "C++",

    swift: "Swift by Apple"
};

// Iterating through each property(key) of the object

for (const key in languageObject) {

    // Printing each key and its corresponding value

    console.log(`${key} shortcut is for ${languageObject[key]}`);
}

// For in Loops in JavaScript with arrays

const programming = ["HTML", "CSS", "JavaScript", "PHP", "Java"];

// Iterating through each index of the array

for (const index in programming) {

    // Printing each element using its index

    console.log(programming[index]);
}

// For in loop iterates over the enumerable properties of an object, returning keys. On the other hand, for of loop iterates over the values of an iterable object.

// For in loop is used to iterate over objects whereas for of loop is used to iterate over arrays.