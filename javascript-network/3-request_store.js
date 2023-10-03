#!/usr/bin/node

const request = require('request');
const fs = require('fs');

// Retrieves URL and file path from the CL args
const url = process.argv[2];
const filePath = process.argv[3];

request(url).pipe(fs.createWriteStream(filePath));