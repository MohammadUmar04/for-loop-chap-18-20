//question no 3

var tableNumber = parseInt(prompt("enter the number for the muliplication table:"));
var tableLength = parseInt(prompt("enter the number for the muliplication table:"));

if (isNaN(tableNumber) || isNaN(tableLength)) {
    alert("please enter a valid number.");
} 
else{
    document.write("<h2>Multiplication Table for " + tableNumber + "</h2>");

for( var i =1; i<= tableLength; i++){
    var result = tableLength * i;
    document.write(tableNumber + " * " + i + " = " + result + "<br>");
   
}
}