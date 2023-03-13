function toyShop(input) {

    // prices
    let puzzlePrice = 2.60;
    let dollPrice = 3;
    let bearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2;

    // input Order: tripPrice->puzzleCount->dollsCount->bearsCount->minionsCount->trucksCount
    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let totalPrice = puzzleCount * puzzlePrice 
                    + dollsCount * dollPrice 
                    + bearsCount * bearPrice 
                    + minionsCount * minionPrice 
                    + trucksCount * truckPrice;

    let totalToysQuantity = puzzleCount + dollsCount + bearsCount + minionsCount + trucksCount;

    if (totalToysQuantity >= 50){
        totalPrice *= 0.75
    }

    totalPrice *= 0.9

    totalPrice -= tripPrice
    if (totalPrice >= 0){
        console.log(`Yes! ${totalPrice.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${Math.abs(totalPrice).toFixed(2)} lv needed.`);
    }

}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);