// DOM Manipulation in JavaScript

// getElementById() - Selects an element by its id attribute.

// Select the element with id "title"

const heading = document.getElementById("title");

// Apply various styles to the selected element

heading.style.color = "red"; // Set text color to red

heading.style.backgroundColor = "yellow"; // Set background color to yellow

heading.style.padding = "10px"; // Add padding of 10 pixels

heading.style.textAlign = "center"; // Center align text

heading.style.border = "2px solid red"; // Add border with 2px width, solid style, and red color

heading.style.borderRadius = "8px"; // Add border radius of 8 pixels

// Log different properties of the selected element for demonstration

console.log(heading.innerText); // Log the text content ignoring styles

console.log(heading.textContent); // Log the text content including styles

console.log(heading.innerHTML); // Log the HTML content including child elements

// getElementsByClassName() - Selects elements by their class name.

// Select elements with class "dom-content"

const paragraphElements = document.getElementsByClassName("dom-content");

// Iterate over the collection of elements and apply styles to each one

for (let i = 0; i < paragraphElements.length; i++) {

    paragraphElements[i].style.color = "red"; // Set text color to red

    paragraphElements[i].style.backgroundColor = "yellow"; // Set background color to yellow
    
    paragraphElements[i].style.padding = "10px"; // Add padding of 10 pixels

    paragraphElements[i].style.textAlign = "center"; // Center align text

    paragraphElements[i].style.border = "2px solid red"; // Add border with 2px width, solid style, and red color

    paragraphElements[i].style.borderRadius = "8px"; // Add border radius of 8 pixels

    paragraphElements[i].style.fontSize = "20px"; // Set font size to 20 pixels
}

// querySelector() - Selects the first element that matches a specified CSS selector.

// Select the element with id "ordered-list"

const orderedList = document.querySelector("#ordered-list");

// Apply styles to the selected list

orderedList.style.listStyle = "none"; // Remove list-style

orderedList.style.padding = "10px"; // Add padding of 10 pixels

orderedList.style.margin = " 5px"; // Add margin of 5 pixels

orderedList.style.backgroundColor = "green"; // Set background color to green

orderedList.style.color = "white"; // Set text color to white

orderedList.style.textAlign = "center"; // Center align text

orderedList.style.border = "5px solid white"; // Add border with 5px width, solid style, and white color

orderedList.style.borderRadius = "8px"; // Add border radius of 8 pixels

// Dom intro - Apply styles to elements with class "dom-introduction"

const DOM = document.getElementsByClassName("dom-introduction");

for (let i = 0; i < DOM.length; i++) {

    DOM[i].style.color = "red"; // Set text color to red

    DOM[i].style.backgroundColor = "yellow"; // Set background color to yellow

    DOM[i].style.padding = "10px"; // Add padding of 10 pixels

    DOM[i].style.textAlign = "center"; // Center align text

    DOM[i].style.border = "2px solid red"; // Add border with 2px width, solid style, and red color

    DOM[i].style.borderRadius = "8px"; // Add border radius of 8 pixels

    DOM[i].style.fontSize = "20px"; // Set font size to 20 pixels
}

// Select all <li> elements within <ul> elements and apply individual styles

const unorderedList = document.querySelectorAll("ul li");

unorderedList[0].style.color = "red"; // Set text color of first <li> to red

unorderedList[1].style.color = "brown"; // Set text color of second <li> to brown

unorderedList[2].style.color = "green"; // Set text color of third <li> to green

// Parent Child Manipulation

// Select the element with class "parent"

const parent = document.querySelector(".parent");

// Log the parent element and its children

console.log(parent);

for (let i = 0; i < parent.children.length; i++) {

    console.log(parent.children[i].innerHTML); // Log innerHTML of each child element
}

// Apply style to the first child element of the parent

parent.children[0].style.color = "red"; // Set text color of first child to red

// Log the first and last child elements of the parent

console.log(parent.firstElementChild); // Log the first child element

console.log(parent.lastElementChild); // Log the last child element

// Select an element with class "day"

const dayOne = document.querySelector(".day");

// Log the element and its next sibling

console.log(dayOne); // Log the selected element

console.log(dayOne.nextElementSibling); // Log the next sibling element

// Log all child nodes of the parent element

console.log("NODES: ", parent.childNodes); // Log all child nodes of parent

// Creation of new elements in the DOM

// Create a new <div> element

const newDiv = document.createElement("div");

// Set class and attributes for the new <div>

newDiv.className = "day"; // Set class name

newDiv.setAttribute("title", "generated-title"); // Set title attribute

// Apply styles to the new <div>

newDiv.style.backgroundColor = "green"; // Set background color to green

newDiv.style.padding = "10px"; // Add padding of 10 pixels

// Create text node and append it to the new <div>
// const addText = document.createTextNode("Chai Aur Code");
// newDiv.appendChild(addText);
// Append the new <div> to the document body
// document.body.appendChild(newDiv);

// Edit and Remove Elements using DOM Manipulation

function addTask(task) {

    const li = document.createElement("li"); // Create a new <li> element

    li.innerHTML = `${task}`; // Set inner HTML content

    document.querySelector("#task-list").appendChild(li); // Append <li> to #task-list
}
addTask("Task 4"); // Call addTask function with task "Task 4"

addTask("Task 5"); // Call addTask function with task "Task 5"

function optimizedApproach(task) {

    const li = document.createElement("li"); // Create a new <li> element

    li.appendChild(document.createTextNode(task)); // Append text node to <li>

    document.querySelector("#task-list").appendChild(li); // Append <li> to #task-list
}
optimizedApproach("Task 6"); // Call optimizedApproach function with task "Task 6"

optimizedApproach("Task 7"); // Call optimizedApproach function with task "Task 7"

// Edit

const secondTask = document.querySelector("#task-list li:nth-child(2)"); // Select second <li> in #task-list

const newLi = document.createElement("li"); // Create a new <li> element

newLi.textContent = "Updated Task 2"; // Set text content of new <li>

secondTask.replaceWith(newLi); // Replace second <li> with new <li>

const firstTask = document.querySelector("#task-list li:nth-child(1)"); // Select first <li> in #task-list

firstTask.outerHTML = "<li>Updated Task 1</li>"; // Replace outer HTML of first <li>

// Remove

const lastTask = document.querySelector("#task-list li:nth-child(7)"); // Select last <li> in #task-list

lastTask.remove(); // Remove the last <li>