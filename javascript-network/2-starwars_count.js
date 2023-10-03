#!/usr/bin/node

// Importing the request module to make HTTP requests
const request = require('request');

// Checks if the API URL is present
if (process.argv.length !== 3) {
    console.log("Usage: node 2-starwars_counts.js <API URL>"); 
    process.exit(1);
}

// Gets the API URL from the CLI arg
const apiUrl = process.argv[2];

// Sends a GET request to the Star Wars API films endpoint
function wedgeMovies() {
    request.get(apiUrl, (error, response, body) => {
        if (error) {
            console.error("An error occured:", error);
        } else if (response.statusCode !== 200) {
            console.error(`Request failed with status code ${response.statusCode}`);
        } else {
            try {
                // Parse the JSON response
                const filmsData = JSON.parse(body);

                // Initialize count for movies where Wedge Antilles is present
                let count = 0;

                // Loop through each film
                filmsData.results.forEach((film) => {
                    // Check if character ID 18 is in the characters array
                    if (film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')) {
                        count++;
                    }
                });
                
                // Print count of movies where Wedge Antilles is present
                console.log(`${count}`);
            } catch (parseError) {
                console.error("Error parsing JSON response:", parseError);
            }
        }
    });
}

wedgeMovies();