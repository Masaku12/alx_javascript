#!/usr/bin/node

// Imports the request module
const request = require('request');

// Sends a GET request to the API URL
request(process.argv[2], (error, response, body) => {
    // Checks if there are no errors in response
    if (!error) {
        // Initialize an empty object
        const completed = {};

        // Parse the JSON response
        JSON.parse(body).forEach(todo => {
            // Checks if the task is done
            if (todo.completed) {
                // Increments the completed task count
                completed[todo.userId] = (completed[todo.userId] || 0) + 1;
            }
        });

        // Print the completed object
        console.log(completed);
    }
});