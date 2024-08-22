// Define a function named `clickHandler` that takes a parameter `color`

function clickHandler(color) {

    // The function returns another function (a closure)

    return function () {

        // Inside the returned function, set the background color of the document's body

        // The background color is set to the value of the `color` parameter passed to `clickHandler`

        document.body.style.backgroundColor = `${color}`;
    }
}

// Add an event listener to the element with the ID 'orange'

// When the element is clicked, the `clickHandler` function is called with the argument "orange"

// This sets up the returned function to change the background color to orange when the element is clicked

document.getElementById('orange').onclick = clickHandler("orange");

// Add an event listener to the element with the ID 'blue'

// When the element is clicked, the `clickHandler` function is called with the argument "blue"

// This sets up the returned function to change the background color to blue when the element is clicked

document.getElementById('blue').onclick = clickHandler("blue");