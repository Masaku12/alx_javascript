#!/usr/bin/node

// A function that sets cookies
function setCookies() {
    const firstNameInput = document.getElementById("firstname").value;
    const emailInput = document.getElementById("email").value;

    // Gets existing cookies, if any
    const existingCookies = document.cookie

    // Sets cookies for the firstname and email
    document.cookie = `${existingCookies}firstname=${firstNameInput};`;
    document.cookie = `${existingCookies}email=${emailInput};`;
}

// A function that shows cookies
function showCookies() {
    // Creates a paragraph element
    const paragraph = document.createElement("p");

    // Gets the value of the cookies
    const cookiesArray = document.cookie.split(';');
    let firstNameCookie = "";
    let emailCookie = "";

    for (let i = 0; i < cookiesArray.length; i++) {
        const cookie = cookiesArray[i];
        const cookieParts = cookie.split('=');
        const cookieName = cookieParts[0].trim();
        const cookieValue = cookieParts[1];

        if (cookieName === "firstname") {
            firstNameCookie = cookieValue;
        }

        if (cookieName === "email") {
            emailCookie = cookieValue;
        }
    }

    // Sets the paragraph's innerHTML to show the cookies
    paragraph.innerHTML = `Cookies: First Name - ${firstNameCookie}, Email - ${emailCookie}`;

    // Appends the paragraph to the bottom of the page
    document.body.appendChild(paragraph);
}