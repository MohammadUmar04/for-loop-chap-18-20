//question no 13
// Given arrays
var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];

// Create a table element
var table = document.createElement("table");

// Create table header
var headerRow = table.insertRow();
var headerCell1 = headerRow.insertCell(0);
headerCell1.textContent = "Student";
var headerCell2 = headerRow.insertCell(1);
headerCell2.textContent = "Score";

// Create table rows and cells
for (var i = 0; i < students.length; i++) {
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    cell1.textContent = students[i];
    var cell2 = row.insertCell(1);
    cell2.textContent = scores[i];

    cell2.style.border = "1px solid black"; // Add this line for border styling
    cell1.style.border = "1px solid black"; // Add this line for border styling
}

// Append the table to the body of the document
document.body.appendChild(table);
