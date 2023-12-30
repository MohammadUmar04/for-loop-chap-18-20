//question  no 11
var A = [24, 53, 78, 91, 12];

// Initialize the maximum and minimum values to the first element of the array
var maxNumber = A[0];
var minNumber = A[0];

// Iterate through the array to find the maximum and minimum values
for (var i = 1; i < A.length; i++) {
    if (A[i] > maxNumber) {
        maxNumber = A[i];
    }

    if (A[i] < minNumber) {
        minNumber = A[i];
    }
}

// Print the results
document.write("The largest number in the array is:", maxNumber);
document.write("The smallest number in the array is:", minNumber);
