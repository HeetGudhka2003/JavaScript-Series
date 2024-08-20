// Define an object 'User' with private properties and getter/setter methods

const User = {

    // Private property '_email'

    _email: 'h@hc.com',

    // Private property '_password'

    _password: "abc",

    // Getter method for the 'email' property

    get email() {

        // Return the email in uppercase form

        return this._email.toUpperCase();
    },

    // Setter method for the 'email' property

    set email(value) {

        // Assign the provided value to the '_email' property

        this._email = value;
    }
}

// Create a new object 'tea' that inherits from the 'User' object

const tea = Object.create(User);

// Log the 'email' property of 'tea' to the console

console.log(tea.email); // Output: "H@HC.COM"