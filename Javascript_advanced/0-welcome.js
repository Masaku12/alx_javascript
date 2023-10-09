// Defines a function that takes two args
function welcome(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;

    // Defines a nested function
    function displayFullName() {
        // Displays an alert message
        alert('Welcome ' + fullName + '!');
    }

    // Calls the nested function at the end of the alert
    displayFullName();
}

// Calls the "welcome" function
welcome('Holberton', 'School');