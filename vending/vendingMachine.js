let snackCount = prompt("How many snacks do you want?");

if(snackCount === null) {
    console.log("No snack requested. Exiting.");
    
}

snackCount = Number(snackCount); //convert to a number

for(let i= 1; i <=snackCount; i++) {
    let snack = prompt("Enter snack # " + i + " name:");

    if (snack === null) {
        console.log("Snack selection canceled. Exciting.");
        break; 
}
console.log("Snack #" + i + ":" + snack + " given to customer");
if (i % 3 === 0){
    console.log("You got a bonus snack!");
}}
