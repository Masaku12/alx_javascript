// Creates a global variable
let globalVariable = "Welcome";

// Defines an outer function
function outer() {
    // Alerts the contents of the globalVariable
    alert(globalVariable);

    // Creates a variable with a value
    let course = "Holberton";

    // Defines an inner function
    function inner() {
        // Alerts the content of globalVariable & course
        alert(globalVariable + " " + course);

        // Creates a new variable
        let exclamation = "!";

        // Defines the inceptions function
        function inception() {
            // Alerts the contents of globalVariable, course, and exclamation mark
            alert(globalVariable + " " + course + exclamation);
        }

        // Calls the Inception function
        inception();
    }

    // Calls the inner function
    inner();
}

// Calls the outer function
outer();