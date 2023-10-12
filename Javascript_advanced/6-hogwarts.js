// Defines the studentHogwarts module
function studentHogwarts() {
    // Private variables
    let privateScore = 0;
    let name = null;

    // Private method to change score by specified points
    const changeScoreBy = (points) => {
        privateScore += points;
    }
    // Public method to set the name
    this.setName = (newName) => {
        name = newName;
    }
    
    // Public method to reward student
    this.rewardStudent = () => {
        changeScoreBy(1);
    }
    
    // Public method to penalize student
    this.penalizeStudent = () => {
        changeScoreBy(-1);
    },
    
    // Public method to get student's score 
    this.getScore = () => `${name}: ${privateScore}`;
}

// Create an instance for Harry
const harry = new studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore()); // Print Harry's score

// Create an instance for Draco
const draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore()); // Print Draco's score