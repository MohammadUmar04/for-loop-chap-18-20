//question no 6
// Get the number of items from the user
var numberOfItems = prompt("Enter the number of items:");
//question no 6
// Parse the input as an integer
numberOfItems = parseInt(numberOfItems);

// Check if the input is a valid number
if (isNaN(numberOfItems) || numberOfItems <= 0) {
    document.write("Invalid input. Please enter a valid number greater than 0.");
} else {
    // Initialize an empty array
    var userArray = [];

    // Use a loop to populate the array
    for (var i = 0; i < numberOfItems; i++) {
        // Get input for each item
        var item = prompt("Enter item " + (i + 1) + ":");
        // Add the item to the array
        userArray.push(item);
    }

    // Display the populated array
    document.write("Array of items:", userArray);
}
