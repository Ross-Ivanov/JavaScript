function numberInRange100To200(input) {

    let currentNumber = Number (input[0]);

    if (currentNumber < 100 ){
        console.log("Less than 100");
    } else if (currentNumber > 200) {
        console.log("Greater than 200");
    } else {
        console.log("Between 100 and 200");
    }

}

numberInRange100To200(["95"]);
numberInRange100To200(["120"]);
numberInRange100To200(["210"]);