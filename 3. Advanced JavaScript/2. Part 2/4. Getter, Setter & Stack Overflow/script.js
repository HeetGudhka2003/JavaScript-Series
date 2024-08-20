// Define the User class

class User {

    // The constructor method is called when an instance of the class is created

    constructor(email, password) {

        // Assign the 'email' and 'password' arguments to the respective properties using setters

        this.email = email;

        this.password = password;
    }

    // Getter method for the 'email' property

    get email() {

        // Return the email in uppercase form

        return this._email.toUpperCase();
    }

    // Setter method for the 'email' property

    set email(value) {

        // Store the value in a private property '_email'

        this._email = value;
    }

    // Getter method for the 'password' property

    get password() {

        // Return the password with 'hitesh' appended to it

        return `${this._password}hitesh`;
    }

    // Setter method for the 'password' property

    set password(value) {

        // Store the value in a private property '_password'

        this._password = value;
    }
}

// Create a new instance of the User class with the provided email and password

const hitesh = new User("h@hitesh.ai", "abc");

// Log the email property to the console

console.log(hitesh.email); // Output: "H@HITESH.AI"