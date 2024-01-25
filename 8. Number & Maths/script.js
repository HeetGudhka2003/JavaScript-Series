// Numbers in JavaScript

// Assigns the value 400 to the variable 'score'.

const score = 400;

// Prints the concatenated string "The score is: " and the value of the 'score' variable.

console.log("The score is: " + score);

// Creates a Number object with a value of 100 and assigns it to the 'balance' variable.

const balance = new Number(100);

// Prints the concatenated string "The balance is: " and the value of the 'balance' variable.

console.log("The balance is: " + balance);

// Prints the length of the string representation of the 'balance' variable.

console.log("The length of the balance is: " + balance.toString().length);

// Prints the fixed-point representation of the 'balance' variable with 2 decimal places.

console.log("The fixed balance is: " + balance.toFixed(2));

// Assigns the value 123.8966 to the 'anotherNumber' variable.

const anotherNumber = 123.8966;

// Prints the precision of the 'anotherNumber' with 3 significant digits.

console.log("The precision of the number is: " + anotherNumber.toPrecision(3));

// Assigns the value 1000000 to the 'hundreds' variable.

const hundreds = 1000000;

// Prints the Indian formatted string of the 'hundreds' variable.

console.log("The Indian format of the number is: " + hundreds.toLocaleString("en-IN"));

// Maths in JavaScript

// Prints the Math library object.

console.log(Math);

// Prints the precise value of PI with 3 significant digits.

console.log("The precise value of PI is: " + Math.PI.toPrecision(3));

// Prints the absolute value of 4.

console.log("The absolute value of 4 is: " + Math.abs(4));

// Prints the rounded value of 4.6.

console.log("The rounded value of 4.6 is: " + Math.round(4.6));

// Prints the ceiling value of 4.6 (rounds up to the nearest integer).

console.log("The ceiled value of 4.6 is as it considers after decimal value: " + Math.ceil(4.6));

// Prints the floor value of 4.6 (rounds down to the nearest integer).

console.log("The floored value of 4.6 is as it considers before decimal value: " + Math.floor(4.6));

// Prints the square root of 16.

console.log("The square root of 16 is: " + Math.sqrt(16));

// Prints the result of 2 raised to the power of 3.

console.log("The power of 2 raise to 3 is: " + Math.pow(2, 3));

// Prints the minimum value among the provided numbers.

console.log("The minimum value between 1, 2, 3, 4, 5 is: " + Math.min(1, 2, 3, 4, 5));

// Prints the maximum value among the provided numbers.

console.log("The maximum value between 1, 2, 3, 4, 5 is: " + Math.max(1, 2, 3, 4, 5));

// Prints a random value between 0 (inclusive) and 1 (exclusive).

console.log("The random value between 0 and 1 is: " + Math.random());