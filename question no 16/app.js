//question no 16
// Get user input for the initial value of num
let num = parseFloat(prompt("Enter the initial value for num:"));

// Repeat until num becomes non-positive
while (num > 0) {
    document.write(`Current value of num: ${num}`);
    num -= 0.5;
}

document.write("Num has become non-positive. Program ending.");



















// // Get the initial value of num from the user
// var num = parseFloat(prompt("Enter the initial value for num:"));

// // Check if the input is a valid number
// if (isNaN(num)) {
//     console.log("Invalid input. Please enter a number.");
// } else {
//     // Loop until num becomes non-positive
//     while (num > 0) {
//         // Print the current value of num
//         console.log(num);

//         // Decrease num by 0.5 for the next iteration
//         num -= 0.5;
//     }
// }
