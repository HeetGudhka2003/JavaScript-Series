// Define a constructor function 'User' for creating new user objects

function User(email, password) {

    // Private properties '_email' and '_password' initialized with the provided arguments

    this._email = email;

    this._password = password;

    // Define a getter and setter for 'email' using Object.defineProperty

    Object.defineProperty(this, 'email', {

        // Getter method for 'email' property

        get: function() {

            // Return the '_email' in uppercase

            return this._email.toUpperCase();
        },
        // Setter method for 'email' property

        set: function(value) {

            // Assign the provided value to '_email'

            this._email = value;
        }
    });

    // Define a getter and setter for 'password' using Object.defineProperty

    Object.defineProperty(this, 'password', {

        // Getter method for 'password' property

        get: function() {

            // Return the '_password' in uppercase

            return this._password.toUpperCase();
        },
        
        // Setter method for 'password' property

        set: function(value) {

            // Assign the provided value to '_password'

            this._password = value;
        }
    });
}

// Create a new instance of the User object

const chai = new User("chai@chai.com", "chai");

// Log the 'email' property of the 'chai' object to the console

console.log(chai.email); // Output: "CHAI@CHAI.COM"