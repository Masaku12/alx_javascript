#!/usr/bin/node

const request = require('request');
const fs = require('fs');

// Retrieves URL and file path from the CL args
const url = process.argv[2];
const filePath = process.argv[3];

// Sends a GET request to the given URL
request.get(url, (error, response, body) => {
    if (error) {
        console.error("An error occured:", error);
    } else if (response.statusCode !== 200) {
        console.error(`Request failed with status code ${response.statusCode}`);
    } else {
        try {
            // Writes the body response to the given URL
            fs.writeFileSync(filePath, body, 'utf-8');
            console.log(`${filePath}`);
        } catch (writeError) {
            console.error("Error writing to the file:", writeError);
        }
    }
});