// This keyword & Arrow Functions

// Define an object named 'user' with properties 'username' and 'price', along with a method 'welcomeMessage'.

const user = {

    username: "hitesh",

    price: 999,

    // Define a method 'welcomeMessage' using the traditional function syntax. It takes an optional parameter 'username', defaulting to "Guest".
    welcomeMessage: function (username = "Guest") {

        // Print a welcome message using the 'username' property of the object and log the object itself.

        console.log(`${this.username}, welcome to our website`);

        console.log(this);
    }
}

// Call the 'welcomeMessage' method of the 'user' object.

user.welcomeMessage();

// Change the value of the 'username' property of the 'user' object to "sam".

user.username = "sam";

// Call the 'welcomeMessage' method of the 'user' object again after modifying the 'username'.

user.welcomeMessage();

// Log the value of 'this' outside any object or function. In Node.js or browser environment, 'this' refers to the global object.

console.log(this);

// Define a function named 'one'.

function one() {

    // Declare a local variable 'username' and assign it the value "hitesh".

    let username = "hitesh";

    // Attempt to log the value of 'this.username'. Since 'this' is not bound to any object here, it will be 'undefined'.

    console.log(this.username);
}

// Call the function 'one'.

one();

// Define an arrow function named 'two'.

const two = () => {

    // Declare a local variable 'username' and assign it the value "hitesh".

    let username = "hitesh";

    // Attempt to log the value of 'this.username'. Arrow functions do not have their own 'this' context, so they inherit 'this' from the surrounding scope, which is the global object here.

    console.log(this. Username);
}

// Call the arrow function 'two'.

two();