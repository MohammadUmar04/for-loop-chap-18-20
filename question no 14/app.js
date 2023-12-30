//question no 14
var scores = [12, 45, 3, 22, 34, 50];

// Take input from the user for the stop value
var stopValue = prompt("Enter the stop value:");

// Convert the user input to a number
stopValue = parseInt(stopValue);

// Check if the input is a valid number
if (isNaN(stopValue)) {
    document.write("Invalid input. Please enter a number.");
} else {
    // Iterate through the array and print numbers up to the stop value
    for (var i = 0; i < scores.length; i++) {
        document.write(scores[i] + ", ");

        // Check if the current number is equal to the stop value
        if (scores[i] === stopValue) {
            break; // Stop the loop if the stop value is reached
        }
    }
}

