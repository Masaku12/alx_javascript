#!/usr/bin/node
// A script that displays the status code of a GET request

// Getting the URL from the CLI
const url = process.argv[2];

// Importing the request module to make HTTP requests
const request = require('request')

// Send the GET request to the intended URL
request.get(url, (error, response) => {
    if (error) {
        console.log(error);
    } else {
        console.log('code: ' + response.statusCode);
    }
});