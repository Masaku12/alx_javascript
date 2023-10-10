// Defines a function that takes one argument
function divideBy(firstNumber) {
    // Returns a function(closure) that takes one argument
    return function(secondNumber) {
        // Returns the result of division
        return secondNumber / firstNumber;
    };
}

// Defines a function addBy that takes one argument firstNumber
function addBy(firstNumber) {
    // Returns a function(closure) that takes one argument
    return function(secondNumber) {
        // Returns the sum of two numbers
        return firstNumber + secondNumber;
    };
}

// Create four closures using functions addBy and divideBy
let addBy100 = addBy(100);
let addBy1000 = addBy(1000);
let divideBy10 = divideBy(10);
let divideBy100 = divideBy(100);