function puppyCare(input) {
    index = 0;
    let foodBoughtKG = Number(input[index]);
    index++;
    foodBoughtKG *= 1000;
    command = input[index];
    index++;
    while (command !=="Adopted") {
        let foodEaten = Number(command);
        foodBoughtKG -=foodEaten
        command = input[index];
        index++;
    }
    if(foodBoughtKG >= 0) {
        console.log(`Food is enough! Leftovers: ${foodBoughtKG} grams.`);
    }else {
        console.log(`Food is not enough. You need ${Math.abs(foodBoughtKG)} grams more.`);
    }
}

puppyCare(["4", "130", "345", "400", "180", "230", "120", "Adopted"])
puppyCare(["3", "1000", "1000", "1000", "Adopted"]);
puppyCare(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);