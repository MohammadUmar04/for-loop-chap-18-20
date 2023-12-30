//question no 8

let a = ["cake", "apple pie", "cookie", "chips", "patties"];
let b = prompt("Search for a food item:");
var found = false;

// Loop through the array to check if the input string is equal to any element
for (var i = 0; i < a.length; i++) {
    if (b.toLowerCase() === a[i].toLowerCase()) {
        found = true;
        break;  // Exit the loop if a match is found
    }
}

if (found) {
    document.write("Passed");
} else {
    document.write("Not found");
}

