// Function to generate a random hexadecimal color code

const randomColor = () => {

    const hexValues = "0123456789ABCDEF";

    let color = "#";

    // Generate 6 random hexadecimal digits

    for (let i = 0; i < 6; i++) {

        color += hexValues[Math.floor(Math.random() * hexValues.length)];
    }

    return color; // Return the generated color code
}

let intervalID; // Variable to store the interval ID for controlling color changing

// Function to start changing the background color at an interval

const startChangingColor = function () {

    // Check if color changing is not already started

    if (!intervalID) {

        // Start changing the background color every 1000 milliseconds (1 second)

        intervalID = setInterval(changeBackgroundColor, 1000);
    }

    // Function to change the background color

    function changeBackgroundColor() {

        // Set the background color of the body to a random color

        document.body.style.backgroundColor = randomColor();
    }
}

// Function to stop changing the background color

const stopChangingColor = function () {

    // Clear the interval, stopping the color change

    clearInterval(intervalID);

    // Reset the intervalID variable to null, indicating color change is stopped

    intervalID = null;
}

// Event listener for the start button, triggers the startChangingColor function when clicked

document.querySelector("#start").addEventListener("click", startChangingColor);

// Event listener for the stop button, triggers the stopChangingColor function when clicked

document.querySelector("#stop").addEventListener("click", stopChangingColor);