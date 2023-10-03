#!/usr/bin/node

const request = require('request');

// Gets movie ID from the CL args
const movieId = process.argv[2];

// Constructs URL for the Star Wars movie API
const url = 'https://swapi-api.hbtn.io/api/films/' + movieId;

// Sends a GET request to retrieve movie details
request(url, (error, response, body) => {
    if (error) {
        console.log(error);
    }

    // Parsing the JSON response
    const result = JSON.parse(body);

     // Log the movie title
     console.log(`${result.title}`);

    // Iterates through the character URLs in the movie's cast
    for (const charUrl of result.characters) {
        // Sends a GET request to retrieve character details
        request(charUrl, (err, r, charBody) => {
            if (err) {
                console.log(err);
            } else {
                // Parse the JSON response
                const character = JSON.parse(charBody);

                // Log the character name
                console.log(character.name)
            }
        }); 
    }
});