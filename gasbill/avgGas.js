let entryCount = 0;
let username = prompt("Enter your name: ");
let Gas = calcGasAvg();

confirm(`${username}'s average weekly gas bill is $${Gas.toFixed(2)}`);

function calcGasAvg() {
 let count = 0;
 let total = 0; 
 let gasBill = 0;

 gasBill = parseFloat(prompt("Enter your weekly gas total. Enter -1 when you are done."));

 while (gasBill !== -1) {
    total = total + gasBill;
    count++;

    gasBill = parseFloat(prompt("Enter your weekly gas total. Enter -1 when you are done."));
 }

let gasAvg;
if (count > 0) {
    gasAvg = total / count;
} else {
    gasAvg = 0;
}
entryCount = count;

return gasAvg;
}

if (entryCount === 0) {
    confirm("No gas totals were entered.");
} else if (entryCount === 1) {
    confirm(`You entered ${entryCount } gas total.`);
} else {
    confirm(`You entered ${entryCount } gas totals.`);
}
