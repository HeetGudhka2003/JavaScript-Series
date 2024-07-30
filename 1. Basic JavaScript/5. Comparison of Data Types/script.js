// Comparing if 2 is greater than 1

console.log(2 > 1); // Output: true

// Comparing if 2 is greater than or equal to 1

console.log(2 >= 1); // Output: true

// Comparing if 2 is less than 1

console.log(2 < 1); // Output: false

// Comparing if 2 is equal to 1

console.log(2 == 1); // Output: false

// Comparing if 2 is not equal to 1

console.log(2 != 1); // Output: true


// Comparing a string "2" with the number 1 (JavaScript coerces the string to a number)

console.log("2" > 1); // Output: true

// Comparing a string "02" with the number 1 (JavaScript coerces the string to a number)

console.log("02" > 1); // Output: true

// Comparing null with the number 0

console.log(null > 0); // Output: false

// Comparing null with the number 0 using loose equality

console.log(null == 0); // Output: false

// Comparing null with the number 0 using greater than or equal to

console.log(null >= 0); // Output: true

// Comparing undefined with the number 0 using loose equality

console.log(undefined == 0); // Output: false

// Comparing undefined with the number 0

console.log(undefined > 0); // Output: false

// Comparing undefined with the number 0

console.log(undefined < 0); // Output: false

// Strict equality check for a string "2" and the number 2 (different types)

console.log("2" === 2); // Output: false