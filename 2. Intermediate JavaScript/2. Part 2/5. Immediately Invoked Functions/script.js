// Immediately Invoked Function Expressions

// Normal Function

function aurCode() {

    console.log("Let's Code");
}

aurCode();

// Named Immediate Invoked Function Expression

(function chai() {

    console.log("chai");

})();

// Without Name Immediate Invoked Function Expression

((name) => {

    console.log(`${name} Database Connected`);

})("hitesh");