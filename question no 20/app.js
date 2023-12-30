// question no 20

// part 1
for(let i = 0; i<=5; i++){
    let row = ''
    for(let j = 0; j<=5; j++){
        row +='*';
    }
    document.write(row +"<br>")
}

// part 2
for (let i = 0; i <=5; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
        row += '*';
    }
    document.write(row + "<br>");
}

// part 3
    for (let i = 0; i <= 5; i--) {
        let row = '';
        for (let j = 0; j <= i; j++) {
            row += '*';
        }
        document.write(row + "<br>");
    }
    