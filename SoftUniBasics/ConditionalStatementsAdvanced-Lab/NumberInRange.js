function numberInRange(input) {
    let numberToCheck = Number(input[0]);

    if (numberToCheck>= -100 && numberToCheck <=100 && numberToCheck != 0){
        console.log("Yes");
    } else {
        console.log("No");
    }
}

numberInRange(["-25"]);
numberInRange(["0"]);
numberInRange(["25"]);