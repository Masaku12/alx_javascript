// Defines a function that accepts one argument
function welcomeMessage(fullName) {
    // Returns a function that displays an alert
    return function() {
        alert('Welcome ' + fullName);
    };
}

// Assigns three variables closures created by calling a function
let guillaume = welcomeMessage('Guillaume');
let alex = welcomeMessage('Alex');
let fred = welcomeMessage('Fred')