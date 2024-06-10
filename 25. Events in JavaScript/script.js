// attachEvent() is a method used to attach an event handler to an element in older versions of Internet Explorer. 

// It has been deprecated and replaced with addEventListener() in modern browsers.

// jQuery's .on() method is used to attach event handlers to elements, providing similar functionality to addEventListener().

// type, timestamp, defaultPrevented - These are properties of the event object (e) passed to the event handler function.

// target, toElement, srcElement, currentTarget - These properties of the event object represent different aspects of the event target or the element on which the event occurred.

// clientX, clientY, screenX, screenY - These properties provide coordinates of the mouse pointer relative to the client area or the screen when certain mouse events occur.

// altkey, ctrlkey, shiftkey - These properties indicate whether the Alt, Ctrl, or Shift keys were pressed when the event occurred.

// keyCode - This property provides the Unicode value of a key that was pressed during a keyboard event.

document.querySelector('#images').addEventListener('click', function (e) {

    // Attaching a click event listener to the element with the ID 'images'

    // When a click event occurs, this anonymous function is executed with the event object (e) passed as a parameter.

    console.log(e.target.tagName);

    // Outputs the tag name of the element that triggered the event (e.g., 'IMG' if an image was clicked)

    if (e.target.tagName === 'IMG') {

        // Checks if the clicked element is an image (IMG tag)

        console.log(e.target.id);

        // Outputs the ID of the clicked image element

        let removeIt = e.target.parentNode;

        // Assigns the parent node (the container of the clicked image) to the variable 'removeIt'

        removeIt.remove();

        // Removes the parent node (container of the clicked image) from the DOM, effectively removing the image from the page.
    }
});

// The event listener is attached to the '#images' element, listening for click events on any of its child elements.

// If a click event occurs on an image element, it logs the ID of the image and removes it from the DOM.

// This script effectively sets up functionality to remove images when they are clicked within the '#images' container.