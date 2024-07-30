// Stack - Primitive

// Heap - Non Primitive

// Primitive data types are stored in the stack, while non-primitive (objects) are stored in the heap.

// Example 1: Primitive - Strings

// Declare a variable myYouTubeName and assign the string "Chai Aur Code" to it.

let myYouTubeName = "Chai Aur Code";

// Declare another variable anotherName and assign the value of myYouTubeName to it.

let anotherName = myYouTubeName;

// Modify the value of anotherName.

anotherName = "hiteshchaudharydotcom";

// Log the original value of myYouTubeName to the console.

console.log(myYouTubeName);  // Output: "Chai Aur Code"

// Log the modified value of anotherName to the console.

console.log(anotherName);    // Output: "hiteshchaudharydotcom"


// Example 2: Non-Primitive - Objects

// Declare an object user with email and upi properties.

let user = {

    email: "user@google.com",

    upi: "user@ybl"
}

// Declare another variable user2 and assign the value of user to it.

let user2 = user;

// Modify the email property of user2.

user2.email = "hitesh@google.com";

// Log the modified value of email property in the original user object to the console.

console.log(user.email);     // Output: "hitesh@google.com"

// Log the modified value of email property in the user2 object to the console.

console.log(user2.email);    // Output: "hitesh@google.com"