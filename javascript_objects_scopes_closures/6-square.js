#!/usr/bin/node

/**
 * Defines a square
 * @class 
 */

const newSquare = require('./5-square'); // Imports the original square class

class Square extends newSquare {
    charPrint(c) {
        if (c === undefined) {
            c = 'X'; // Sets the default character to X
        }

        for (let i = 0; i < this.height; i++) {
            let row = '';
            for (let j = 0; j < this.width; j++) {
                row += c;
            }
            console.log(row);
        }
    }
}

module.exports = Square;