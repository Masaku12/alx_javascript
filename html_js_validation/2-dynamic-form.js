// This waits for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Gets references to important elements in the HTML document
    const dynamicForm = document.getElementById("dynamicForm"); // This is the main form element
    const numFieldsSelect = document.getElementById("numFields"); // Dropdown menu that selects the number of fields
    const inputContainer = document.getElementById("inputContainer"); // Container for dynamically generated input fields

    // Event listener for changes in the number of fields selection
    numFieldsSelect.addEventListener("change", function() {
        // Gets the selected value from the dropdown menu
        const numFields = parseInt(numFieldsSelect.value, 10);

        // Generates and displays the specified number of input fields
        generateInputFields(numFields);
    });

    // Event listener for form submission
    dynamicForm.addEventListener("submit", function(event) {
        // Validates the form before submission
        if (!validateForm()) {
            event.preventDefault(); // Prevents the form submission
            alert("Please fill all the fields.");
        }
    });

    // Function that generates and displays the specified number of input fields
    function generateInputFields(numFields) {
        // Clears the existing input fields in the container
        inputContainer.innerHTML = "";

        // Creates and appends text input fields based on the selected number
        for (let i = 1; i <= numFields; i++) {
            const inputField = document.createElement("input");
            inputField.type = "text";
            inputField.name = "field" + i;
            inputField.placeholder = "Field" + 1;
            inputContainer.appendChild(inputField);
        }
    }

    // Function that validates the form
    function validateForm() {
        // Gets all dynamically generated fields
        const inputFields = inputContainer.querySelectorAll("input[type='text']");

        // Checks if any field is empty
        for (const inputField of inputFields) {
            if (inputField.value.trim() === "") {
                return false; // Form is invalid
            }
        }
        return true; // Form is valid
    }
});