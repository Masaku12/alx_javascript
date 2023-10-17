// This waits for the DOM content to fully load before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Gets references to form elements by their IDs
    const submitForm = document.getElementById("submitForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    // Adds an event listener to the form element to listen for the "submit" event
    submitForm.addEventListener("submit", function(event) {
        // Prevents the default form submission behavior
        event.preventDefault();

        // Retrieves the values entered in the form fields
        const name = nameInput.value;
        const email = emailInput.value;

        // Uses JavaScript validation to ensure that all key fields are filled
        if (name.trim() === "" || email.trim() === "") {
            // If "name" or "email" fields are empty, display an error message
            alert("Please fill all required fields.");
        } else {
            // If all validation pass, display a success message
            alert("Form submitted successfully!");
        }
    });
});