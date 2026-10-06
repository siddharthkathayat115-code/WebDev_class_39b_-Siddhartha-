const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter electricity units consumed: ", function(units) {
    
    units = Number(units);
    let bill;

    if (units <= 50) {
        bill = units * 5;
    }
    else if (units <= 100) {
        bill = units * 7;
    }
    else if (units <= 200) {
        bill = units * 10;
    }
    else {
        bill = units * 12;
    }

    console.log("Electricity Bill: Rs. " + bill);

    rl.close();
});