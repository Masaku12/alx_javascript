#!/usr/bin/node

// Importing the request module to make HTTP requests
const request = require('request');

// Gets the API URL from the CLI arg
const apiUrl = process.argv[2];

// Sends a GET request to the Star Wars API films endpoint
request.get(apiUrl, function (error, response, body) {
    if (!error) {
        const results = JSON.parse(body).results;

        console.log(results.reduce((count, movie) => {
            return movie.characters.find((character) => character.endsWith('/18/'))
            ? count + 1
            : count;
        }, 0));
    }
});