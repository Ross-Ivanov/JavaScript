function deerOfSanta(input) {

    let daysSantaMissing = Number(input[0]);
    let kgFoodLeft = Number(input[1]);
    let foodPerDayDeerOne = Number(input[2]);
    let foodPerDayDeerTwo = Number(input[3]);
    let foodPerDayDeerThree = Number(input[4]);

    let totalFoodDeersNeed = (foodPerDayDeerOne + foodPerDayDeerTwo+ foodPerDayDeerThree) * daysSantaMissing;
    let foodNeedOrLeft = kgFoodLeft - totalFoodDeersNeed
    if ( foodNeedOrLeft < 0){
        console.log(`${Math.ceil(Math.abs(foodNeedOrLeft))} more kilos of food are needed.`);
    } else {
        console.log(`${Math.floor(foodNeedOrLeft)} kilos of food left.`);
    }

}

deerOfSanta(["2", "10", "1", "1", "2"]);
deerOfSanta(["5", "10", "2.1", "0.8", "11"]);