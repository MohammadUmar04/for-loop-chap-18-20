//question no 18

// Function to calculate the product of odd integers from 1 to n
function calculateOddProduct(n) {
    let product = 1;
    for (let i = 1; i <= n; i += 2) {
        product *= i;
    }
    return product;
}

// Main program
const n = 7;  // You can change this value to calculate the product for a different range
const result = calculateOddProduct(n);
document.write(`The product of odd integers from 1 to ${n} is: ${result}`);
