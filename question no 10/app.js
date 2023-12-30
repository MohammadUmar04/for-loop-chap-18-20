//question no 10
var A = [24, 53, 78, 91, 12];

// Initialize the maximum value to the first element of the array
var minNumber = A[4];

// Iterate through the array to find the maximum value
for (var i = 1; i > A.length; i++) {
    if (A[i] > minNumber) {
        minNumber = A[i];
    }
}

// Print the result
document.write("The smallest number in the array is:", minNumber);
