// Arrays in JavaScript

/*

Important Points to be remembered:

1. JavaScript Arrays are resizable and can contain a mix of different data types.

2. JavaScript Arrays are zero-indexed.

3. JavaScript Arrays are mutable and iterable.

*/

// Creating an array with numeric elements.

const myArray = [1, 2, 3, 4, 5];

// Creating an array with string elements.

const myHeroes = ["Pardeep Narwal", "Surender Gill"];

// Logging arrays to the console.

console.log(myArray);

console.log(myHeroes);

// Array Methods

// Adding an element at the end of the array using the push method.

myArray.push(6);

// Logging the array after using the push method.

console.log("The push method adds an element at the end of the array: ");

console.log(myArray);

// Removing an element from the end of the array using the pop method.

myArray.pop();

// Logging the array after using the pop method.

console.log("The pop method removes an element at the end of the array: ");

console.log(myArray);

// Adding an element at the beginning of the array using the unshift method.

myArray.unshift(0);

// Logging the array after using the unshift method.

console.log("The unshift method adds an element at the beginning of the array: ");

console.log(myArray);

// Removing an element from the beginning of the array using the shift method.

myArray.shift();

// Logging the array after using the shift method.

console.log("The shift method removes an element at the beginning of the array: ");

console.log(myArray);

// Checking if the array includes the value 9.

console.log("The array includes 9: " + myArray.includes(9));

// Finding the index of the value 9 in the array.

console.log("The array includes 9 at index: " + myArray.indexOf(9));

// Joining all elements of the array into a string.

const newArray = myArray.join();

console.log("The join method joins all the elements of the array into a string: "+ newArray);

// Getting the length of the array.

console.log("The array length is: " + myArray.length);

// Reversing the order of elements in the array.

console.log("The array reversed is: " + myArray.reverse());

// Sorting the array (Note: This might not work as expected for numeric arrays)

console.log("The array sorted is: " + myArray.sort());

// Converting the array to a string.

console.log("The array to String is: " + myArray.toString());

// Extracting elements from the array using the slice method. In this method the first index is inclusive and the second index is exclusive. The slice does not manipulates the original array and returns the extracted elements.

console.log("The slice method extracts elements from the array: " + myArray.slice(1, 4));

// Removing elements from the array using the splice method. In this method the first index is inclusive and the second index is exclusive. The splice manipulates the original array and returns the removed elements.

console.log("The splice method removes elements from the array: " + myArray.splice(1, 2));