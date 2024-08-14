// Define a base class User1

class User1 {

    // Constructor method to initialize an instance of the User1 class

    constructor(username) {

        // Assign the provided username to the instance property 'username'

        this.username = username;
    }

    // Method to log a greeting message with the username

    logMe() {

        // Log a message to the console that includes the username

        console.log(`Hello ${this.username}`);
    }
}

// Define a derived class Teacher that extends User1

class Teacher extends User1 {

    // Constructor method to initialize an instance of the Teacher class

    constructor(username, email, password) {

        // Call the parent class's constructor using super() to initialize 'username'

        super(username);

        // Assign the provided email and password to the instance properties

        this.email = email;
        this.password = password;
    }

    // Method to simulate adding a course

    addCourse() {

        // Log a message to the console that indicates a course was added by the username

        console.log(`A new course was added by ${this.username}`);
    }
}

// Create an instance of the Teacher class

const Chai2 = new Teacher('Chai', 'chai@teacher.com', '123');

// Call the logMe method on the Chai2 instance

Chai2.logMe(); // Output: 'Hello Chai'

// Call the addCourse method on the Chai2 instance

Chai2.addCourse(); // Output: 'A new course was added by Chai'