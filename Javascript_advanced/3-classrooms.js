// Defines a function that takes one argument
function createClassRoom(numberOfStudents) {
    function studentSeat(seat) {
        // Returns a function that returns the seat when called
        return function () {
            return seat;
        };
    }

    // Creates an empty array to store the seat value
    let students = [];

    // Uses a loop to create & push student seat functions into the array
    for (let i = 0; i < numberOfStudents; i++) {
        // Calls studentSeat with the seat number(i+1) & pushes the result into students
        students.push(studentSeat(i + 1));
    }

    // Returns the array
    return students;
}

// Creates a closure named classRoom by calling createClassRoom with 10 students
let classRoom = createClassRoom(10);

// Testing the closure 'classRoom'
console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());