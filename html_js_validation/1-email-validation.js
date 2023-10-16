// This waits for the DOM content to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Gets references to HTML elements by their IDs
    const emailForm = document.getElementById("emailForm");
    const emailInput = document.getElementById("email");
    const errorParagraph = document.getElementById("error");

    // Adds a submit event listener to the email form
    emailForm.addEventListener("submit", function(event) {
        // Prevents the default form submission behavior to handle it with custom validation
        event.preventDefault();

        // Retrieves the email entered by the user from the input field
        const email = emailInput.value;

        // Calls the validateEmail function that checks if the email format is valid
        if (validateEmail(email)) {
            // If the email is valid, allow the form submission
            emailForm.submit();
        } else {
            // If the email is not valid, display an error message
            errorParagraph.textContent = "Please enter a valid email address.";
        }
    });

    // A function that validates the email using a RegEX
    function validateEmail(email) {
        // Regular expression that checks for a valid email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Tests if the email matches the RegEX pattern and return true if it's valid
        return emailRegex.test(email);
    }
});