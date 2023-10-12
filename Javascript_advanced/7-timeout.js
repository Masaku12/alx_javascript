console.log("Start of the execution queue");

// Using a loop to with setTimeOut for asynchronous logging
for (let i = 1; i <= 100; i++) {
    // Logs current iteration number with a delay of 0 milliseconds
    setTimeout(() => {
        console.log(i);

        // Checks if this is the last iteration
        if (i === 100) {
            console.log("End of the loop printing");

            // Execute the final code block after the loop
            setTimeout(() => {
                console.log("Final code block to be executed");
            }, 0);
        }
    }, 0);
}