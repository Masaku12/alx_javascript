#!/usr/bin/node

/**
 * Represents a rectangle
 * @class
 */

class Rectangle {
    constructor(w, h) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
        }
    }

    print() {
        for (let i = 0; i < this.height; i++) {
            let row = ''
            for (let j = 0; j < this.width; j++) {
                row += 'X'
            }
            console.log(row)
        }
    }

    rotate() {
        // Exchange width and height of the rectangle
        [this.width, this.height] = [this.height, this.width]
    }

    double() {
        // Double the width and height of the rectangle
        this.width *= 2;
        this.height *= 2;
    }
}


class Square extends Rectangle {
    constructor(size) {
        super(size, size); // Calls the constructor of rectangle with same size for w & h
    }
}

module.exports = Square;