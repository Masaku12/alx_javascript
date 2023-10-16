// Waits for the DOM content to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Gets references to form elements by their IDs
    const passwordForm = document.getElementById("passwordForm");
    const passwordInput = document.getElementById("password");
    const errorParagraph = document.getElementById("error");

    // Adds a submit event listener to the password form
    passwordForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the default form submission

        // Retrieves the password entered by the user
        const password = passwordInput.value;

        // Calls the validatePassword function to check if password meets the criteria
        if (validatePassword(password)) {
            // If password meets the criteria, allow the form submission
            passwordForm.submit();
        } else {
            // If password doesn't meet the criteria, display an error message
            errorParagraph.textContent = "Password must meet desired criteria"
        }
    });

    // A func that validates the password using a RegEX
    function validatePassword(password) {
        // Defines a RegEX pattern for password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        // Tests the password against the RegEX
        return passwordRegex.test(password);
    }
});
