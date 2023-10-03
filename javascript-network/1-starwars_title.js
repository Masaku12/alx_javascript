#!/usr/bin/node

// Imports the request module
const request = require('request');

// Checks if the movie ID is present
if (process.argv.length !== 3) {
    console.log("Usage: node 1-starwars_title.js <movie ID>")
    process.exit(1);
}

// Retrieves the movie ID from the CL args
const movieID = process.argv[2];

// Constructs URL with the given movie ID
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

// Sends a GET request to the Star Wars API endpoint
request.get(apiUrl, (error, response, body) => {
    if (error) {
        console.error("An error has occured:", error);
    } else if (response.statusCode !== 200) {
        console.error(`Request failed with status code ${response.statusCode}`);
    } else {
        try {
            // Parse the JSON response
            const movieData = JSON.parse(body);

            // Prints the movie title
            console.log(`${movieData.title}`);
        } catch (parseError) {
            console.error("Error parsing JSON response:", parseError);
        }
    }
})