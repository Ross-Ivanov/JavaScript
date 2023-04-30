function goldMine (input) {
    let index = 0;
    let locationsInTotal = Number(input[index]);
    index++;
    for (let startLoc = 1; startLoc <= locationsInTotal; startLoc++) {
        let averagedGold = 0
        let expectedGoldPerDay = Number(input[index]);
        index++
        let daysForDigging = Number (input[index]);
        index++
        for (let currentDay = 0; currentDay < daysForDigging ;currentDay++){
            let goldMinedPerDay = Number(input[index]);
            index++
            averagedGold +=goldMinedPerDay
        }
        averagedGold = averagedGold /daysForDigging
        if (averagedGold >= expectedGoldPerDay){
            console.log(`Good job! Average gold per day: ${averagedGold.toFixed(2)}.`);
        } else {
            console.log(`You need ${(expectedGoldPerDay - averagedGold).toFixed(2)} gold.`);
        }
    }



}

goldMine(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"]);
goldMine(["1", "5", "3", "10", "1", "3"]);