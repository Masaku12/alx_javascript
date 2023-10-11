// Defines a function called changeMode that returns another function that changes the page's style
// changeMode accepts five arguments
function changeMode(size, weight, transform, background, color) {
    return function() {
        // In the returned function, style properties for the page are set
        document.body.style.fontSize = size + 'px'; // Changes font size
        document.body.style.fontWeight = weight; // Changes font weight
        document.body.style.textTransform = transform; // Sorts text transform (uppercase, lowercase)
        document.body.style.backgroundColor = background; // Changes bg color
        document.body.style.color = color; // Changes text color
    };
}

// Defines a function called main that initializes the page & sets up event listeners
function main() {
    // Creates closures for different modes using changeMode
    // The closures change page style when clicked
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    // Adds a paragraph to the page's body with specified text
    let paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);

    // Adds buttons to the body
    let spookyButton = document.createElement('button');
    spookyButton.textContent = 'spooky';
    document.body.appendChild(spookyButton);

    let darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Dark Mode';
    document.body.appendChild(darkModeButton);

    let screamModeButton = document.createElement('button');
    screamModeButton.textContent = 'Scream Mode';
    document.body.appendChild(screamModeButton);

    // Adds event listeners to the buttons, changing page style upon clicking
    spookyButton.addEventListener('click', spooky);
    darkModeButton.addEventListener('click', darkMode);
    screamModeButton.addEventListener('click', screamMode);
}

// Calls the main function to set up the page
main();