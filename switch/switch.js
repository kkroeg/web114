let favMnth = prompt("What is your favorite Month?").toLowerCase();

if (favMnth === null) {
    console.log("What about your Birthday month?");
} else {
    switch(favMnth.toLowerCase()) {
        case "january":
        console.log("Burrr.");
        break;

        case "february":
        console.log("Love is in the air.");
        break;

        case "march":
        console.log("Lucky month!");
        break;

        case "april":
        console.log("Spring is in the air.");
        break;

        case "may":
        console.log("I can see why!");
        break;

        case "june":
        console.log("Summer is the best!");
        break;

        case "july":
        console.log("Fireworks are pretty.");
        break;

        case "august":
        console.log("Schools about to start.");
        break;

        case "september":
        console.log("This is a pretty month.");
        break;

        case "october":
        console.log("Trick or Treat.");
        break;

        case "november":
        console.log("Turkey month!");
        break;

        case "december":
        console.log("Winter is here.");
        break;
    }
}

if(favMnth.includes("december","january","february")) {
    console.log("You love winter months!");
} else if(favMnth.includes("june","july","august")) {
    console.log("You enjoy the summer months!");
} else {
    console.log("Other months are interesting too!");
}
