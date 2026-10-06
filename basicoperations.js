const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(num) {

    num = Number(num);

    let square = num * num;
    let cube = num * num * num;

    console.log("Square:", square);
    console.log("Cube:", cube);

    rl.close();
});