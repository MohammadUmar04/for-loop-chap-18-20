//question no 9
var A = [24, 53, 78, 91, 12];

// Initialize the maximum value to the first element of the array
var maxNumber = A[0];

// Iterate through the array to find the maximum value
for (var i = 1; i < A.length; i++) {
    if (A[i] > maxNumber) {
        maxNumber = A[i];
    }
}

// Print the result
document.write("The largest number in the array is:", maxNumber);
