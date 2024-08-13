// Function to set the username for an object

function setUserName(username) {

    // 'this' refers to the object that calls this function.

    // Assign the provided username to the 'username' property of that object.

    this.username = username;
}

// Function to create a new user with a username, email, and password

function createUser(username, email, password) {

    // Call the setUserName function, but use 'call' to explicitly set 'this' to the current object being created.

    // This ensures that the 'username' is set on the correct object, even though setUserName is a separate function.

    setUserName.call(this, username);

    // Assign the provided email to the 'email' property of the current object (referred by 'this')

    this.email = email;

    // Assign the provided password to the 'password' property of the current object (referred by 'this')

    this.password = password;
}

// Create a new instance of the createUser function, which is being used as a constructor function.

// The 'new' keyword creates a new empty object, sets 'this' to that object, and then runs the createUser function.

const chai = new createUser("Chai", "i6H0f@example.com", "Chai@123");

// Log the created object to the console, which will show the properties of the object.

console.log(chai);