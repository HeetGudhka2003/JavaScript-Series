// Class-based approach using ES6 class syntax

class User {

    // Constructor method to initialize an instance of the User class

    constructor(username, email, password) {

        // Assign the provided username, email, and password to instance properties

        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Method to "encrypt" the password by appending a string to it

    encryptPassword() {

        // Returns the original password with "abcdefghijk" appended to it

        return `${this.password}abcdefghijk`;
    }

    // Method to change the username to uppercase

    changeUserName() {

        // Returns the username in uppercase

        return `${this.username.toUpperCase()}`;
    }
}

// Creating an instance of the User class

const Chai = new User('Chai', 'chai@gmail.com', '123');

// Logging the result of encryptPassword method to the console

console.log(Chai.encryptPassword()); // Output: '123abcdefghijk'

// Logging the result of changeUserName method to the console

console.log(Chai.changeUserName()); // Output: 'CHAI'

// Function-based approach using prototype inheritance

// Constructor function to initialize an instance of the user object

function user(username, email, password) {

    // Assign the provided username, email, and password to instance properties

    this.username = username;
    this.email = email;
    this.password = password;
}

// Adding the encryptPassword method to the user prototype

user.prototype.encryptPassword = function () {

    // Returns the original password with "abcdefghijk" appended to it

    return `${this.password}abcdefghijk`;
}

// Adding the changeUserName method to the user prototype

user.prototype.changeUserName = function () {

    // Returns the username in uppercase

    return `${this.username.toUpperCase()}`;
}

// Creating an instance of the user function

const tea = new user('Tea', 'tea@gmail.com', '123');

// Logging the result of encryptPassword method to the console

console.log(tea.encryptPassword()); // Output: '123abcdefghijk'

// Logging the result of changeUserName method to the console

console.log(tea.changeUserName()); // Output: 'TEA'