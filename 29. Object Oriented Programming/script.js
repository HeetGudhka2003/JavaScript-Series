// Object Oriented Programming

/*

We will be studying about:

1. Constructor Function

2. Prototypes

3. Classes

4. Instance Methods (new, this)

Four Pillars of Object Oriented Programming:

1. Encapsulation

2. Abstraction

3. Inheritance

4. Polymorphism

*/

// Basic Object

// This is an object literal, a common way to create an object in JavaScript

const user = {

    // Properties of the object

    username: "Hitesh",
    loginCount: 8,
    signedIn: true,

    // Method of the object

    getUserDetails: function () {

        console.log("Got User Details from Database");

        // 'this' refers to the current object, 'user'

        return this;
    }
}

// Accessing the 'username' property of the 'user' object

console.log(user.username); // Output: Hitesh

// Calling the 'getUserDetails' method of the 'user' object

console.log(user.getUserDetails());

// Output: Got User Details from Database

// Output: { username: 'Hitesh', loginCount: 8, signedIn: true, getUserDetails: [Function: getUserDetails] }

// Another way to call the method

user.getUserDetails(); // Output: Got User Details from Database

// Using new Keyword

// Constructor function to create user objects

function userDetails(username, loginCount, signedIn) {

    // Using 'this' to assign properties to the newly created object

    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
}

// Creating new instances of userDetails using the 'new' keyword

const UserOne = new userDetails("Gaurav Thadani", 8, true);

const UserTwo = new userDetails("Sanket Singh", 10, true);

// Displaying the created objects

console.log(UserOne); // Output: userDetails { username: 'Gaurav Thadani', loginCount: 8, signedIn: true }

console.log(UserTwo); // Output: userDetails { username: 'Sanket Singh', loginCount: 10, signedIn: true }