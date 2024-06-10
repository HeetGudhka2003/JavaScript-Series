// Define an array of numbers.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use filter to create a new array containing only numbers greater than 5.

const newNumbers = myNums.filter((num) => num > 5).map((num) => num);

// Use map to create a new array with the same elements as the filtered array.

// Display the new array.

console.log(newNumbers);

// Display the original array to show that it remains unchanged.

console.log(myNums);

// Define an array of user objects

const users = [
    {
        id: 1,
        name: "Ajay Suneja",
        isActive: true,
        age: 30
    },
    {
        id: 2,
        name: "Mohammad Fraz",
        isActive: true,
        age: 26
    },
    {
        id: 3,
        name: "Manohar Batra",
        isActive: true,
        age: 35
    },
    {
        id: 4,
        name: "Anshika Gupta",
        isActive: false,
        age: 23
    }
]

// Check if a user with the name "Anshika Gupta" exists in the array using some method.

const isNameExists = users.some((user) => user.name === "Anshika Gupta");

// Display the result.

console.log(isNameExists);

// Function to check if a user with a given name exists and is active ?
const isUserActive = (name, users) => {

    return users.some((user) => user.name === name && user.isActive);
}

// Test the function

console.log(isUserActive("abc", users));

// Reduce method in JavaScript

// Define an array of numbers.

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use reduce to calculate the sum of all numbers in the array.

const sum = arrayOfNumbers.reduce(function (accumulator, currentValue) {

    // Log the accumulator and current value at each step.

    console.log(`Accumulator: ${accumulator} and Current Value: ${currentValue}`);

    // Return the sum of accumulator and current value.

    return accumulator + currentValue;

}, 0);

// Display the sum

console.log(sum);

// Use reduce with an arrow function to calculate the sum of all numbers in the array.

const newTotal = arrayOfNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Display the new total

console.log(newTotal);