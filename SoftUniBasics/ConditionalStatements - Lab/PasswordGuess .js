function passwordGuess(input) {

    let userPassword = input[0];
    let correctPassword = "s3cr3t!P@ssw0rd";

    if (userPassword == correctPassword) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

passwordGuess(["qwerty"]);
passwordGuess(["s3cr3t!P@ssw0rd"]);
passwordGuess(["s3cr3t!p@ss"]);