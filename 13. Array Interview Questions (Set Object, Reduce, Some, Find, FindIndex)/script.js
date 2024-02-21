/*

Exploring Set Object, Includes, Some, Reduce, Find & FindIndex

1. Check user with such name exists or not.
2. Adding new elements in the array.
3. Removing duplicate elements from the array.
4. Concatenating two arrays.

*/

// Array of objects

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

// 1. Check user with such name exists or not.

// Solution 1 - Level 1 - Using for loop

// Function to check if a given name exists in the array using a for loop.

const isNameExists = (name, user) => {

    for (let i = 0; i < user.length; i++) {

        if (user[i].name === name) {

            return true;
        }
    }

    return false;
}

// Testing the function with specific names.

console.log("The name Anshika Gupta exists: ", isNameExists("Anshika Gupta", users));

console.log("The name Sheetal Khodbhaya exists: ", isNameExists("Sheetal Khodbhaya", users));

// Solution 2 - Level 2 - Using find method - returns whole object if found else undefined

// Function to check if a given name exists in the array using the find method.

const isNameExists2 = (name, user) => {

    // Returns true if the object with the given name is found, else false.

    return Boolean(user.find(user => user.name === name));
}

// Testing the function with specific names.

console.log("The name Manohar Batra exists: ", isNameExists2("Manohar Batra", users));

console.log("The name Sheetal Khodbhaya exists: ", isNameExists2("Sheetal Khodbhaya", users));

// Solution 3 - Level 3 - Using findIndex method

// Function to check if a given name exists in the array using the findIndex method.
const isNameExists3 = (name, user) => {

    // Returns true if the index of the object with the given name is greater than or equal to 0, otherwise returns false.

    return user.findIndex(user => user.name === name) >= 0;
}

// Testing the function with specific names.

console.log("The name Ajay Suneja exists: ", isNameExists3("Ajay Suneja", users));

console.log("The name Sheetal Khodbhaya exists: ", isNameExists3("Sheetal Khodbhaya", users));

// Solution 4 - Level 4 - Using some method - returns true if found else false 

// Function to check if a given name exists in the array using the some method.
const isNameExists4 = (name, user) => {

    // Returns true if at least one object with the given name is found, otherwise returns false.

    return user.some(user => user.name === name);
}

// Testing the function with specific names.

console.log("The name Mohammad Fraz exists: ", isNameExists4("Mohammad Fraz", users));

console.log("The name Anshika Gupta exists: ", isNameExists4("Anshika Gupta", users));

// 2. Adding new elements in the array.

// Solution 1 - Level 1 - Using push method - makes changes in the original array.

const arr = [1, 2];

// Function to add an element in the array.

const append = (element, arr) => {

    arr.push(element);

    return arr;
}

// Testing the function with specific elements.

append(3, arr);

console.log("The updated array after adding 3 is: ", arr);

// Solution 2 - Level 2 - Using spread operator - creates a new array.

const arr2 = [1, 2];

// Function to add an element in the array.

const append2 = (element, arr) => {

    return [...arr, element];
}

// Testing the function with specific elements.

append2(3, arr2);

console.log("The updated array after adding 3 is: ", arr2);

// 3. Removing duplicate elements from the array.

// The set is a built in data structure in javascript that allows us to store unique values of any type in an array.

// The spread operator is used to expand the array into individual elements.

// The includes() method is used to check if an element is present in array or not.

// Solution 1 - Level 1 - Using forEach method

// Function to remove duplicate elements from the array.

const arr3 = [1, 2, 3, 3, 4, 4, 5, 5];

function uniqueArray() {

    const uniqueElements = [];

    arr3.forEach((ele) => {

        if (!uniqueElements.includes(ele)) {

            uniqueElements.push(ele);
        }
    });

    return uniqueElements;
}

console.log("The updated array after removing duplicates is: ", uniqueArray(arr3));

// Solution 2 - Level 2 - Using set method

const arr4 = [1, 2, 3, 3, 4, 4, 5, 5];

function uniqueArray2() {

    const uniqueElements = new Set(arr4);

    return [...uniqueElements];
}

console.log("The updated array after removing duplicates is: ", uniqueArray2(arr4));

// 4. Concatenating two arrays.

// Solution 1 - Level 1 - Using concat method

// Function to concatenate two arrays.

const arr5 = [1, 2, 3];

const arr6 = [4, 5, 6];

const arr7 = arr5.concat(arr6);

console.log("The concatenated array is: ", arr7);