//question no 7
// a. Counting: 1, 2, 3, ..., 15
document.write("a. Counting:");
for (var i = 1; i <= 15; i++) {
    document.write(i);
}

// b. Reverse counting: 10, 9, ..., 1
document.write("b. Reverse counting:");
for (var j = 10; j >= 1; j--) {
    console.log(j);
}

// c. Even: 0, 2, 4, ..., 20
document.write("c. Even:");
for (var k = 0; k <= 20; k += 2) {
    console.log(k);
}

// d. Odd: 1, 3, 5, ..., 19
document.write("d. Odd:");
for (var l = 1; l <= 19; l += 2) {
    console.log(l);
}

// e. Series: 2k, 4k, ..., 20k
document.write("e. Series:");
for (var m = 2; m <= 20; m += 2) {
    console.log(m + "k");
}
