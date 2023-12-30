//question no 19

for (let i = 7; i >= 0; i--) {
    let row = '';
    for (let j = 0; j <= i; j++) {
        row += '*';
    }
    document.write(row + "<br>");
}
