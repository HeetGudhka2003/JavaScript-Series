// Defining a Symbol with a unique key

const mySymbol = Symbol("key1");

// Creating an object named JavaScriptUser with various properties

const JavaScriptUser = {

    name: "Hitesh Choudhary",

    age: 30,

    location: "Jaipur",

    email: "hitesh@google.com",

    isLoggedIn: false,

    lastLoggedIn: ["Monday", "Saturday"],

    [mySymbol]: "key1" // Using the Symbol as a property
};

// Accessing object properties using dot notation

console.log("The value of Email is: " + JavaScriptUser.email);

// Accessing object properties using bracket notation

console.log("The value of Email is: " + JavaScriptUser["email"]);

// Accessing a property stored as a Symbol

console.log("The value of my symbol is: " + JavaScriptUser[mySymbol]);

console.log(typeof JavaScriptUser[mySymbol]);

// Modifying the value of the location property

JavaScriptUser.location = "Delhi";

// Logging the modified location property

console.log("The value of Location is: " + JavaScriptUser.location);

// Attempting to modify a property of the object after freezing it

// Object.freeze(JavaScriptUser);

// Modifying the value of isLoggedIn property

JavaScriptUser.isLoggedIn = true;

// Logging the modified object

console.log(JavaScriptUser);

// Adding a new method to the object to greet the user
JavaScriptUser.greeting = function () {

    console.log("Namaste JavaScript User!!");
};

// Logging the greeting method

console.log(JavaScriptUser.greeting);

// Adding another method to the object to greet the user with their name

JavaScriptUser.greetingTwo = function () {

    console.log(`Hello JavaScript User!!, ${this.name}`);
};

// Invoking the new method and logging the result

console.log(JavaScriptUser.greetingTwo());