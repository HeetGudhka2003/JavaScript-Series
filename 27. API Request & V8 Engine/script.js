// Define the URL for the API request

const requestURL = 'https://api.github.com/users/hiteshchoudhary';

// Create a new XMLHttpRequest object

const demoRequest = new XMLHttpRequest();

// Initialize a GET request to the specified URL

demoRequest.open('GET', requestURL);

// Define the callback function to handle the response

demoRequest.onreadystatechange = function () {

    // Log the current state of the request

    console.log(demoRequest.readyState);

    // Check if the request is complete (readyState === 4)

    if (demoRequest.readyState === 4) {

        // Parse the JSON response text into a JavaScript object

        const data = JSON.parse(this.responseText);

        // Log the type of the parsed data to the console (should be 'object')

        console.log(typeof data);

        // Log the number of followers of the user to the console

        console.log(data.followers);
    }
}

// Send the request

demoRequest.send();