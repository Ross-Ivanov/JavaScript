function godzillaVsKong(input) {

    let movieBudget = Number(input[0]);
    let backgroundActorsQty = Number(input[1]);
    let backgroundClothingPrice = Number(input[2]);

    let movieDecor = movieBudget * 0.1;
    let totalClothingPrice = backgroundActorsQty * backgroundClothingPrice;
    if (backgroundActorsQty > 150) {
        totalClothingPrice *= 0.9;
    }

    let moneyLeftOrNeeded = movieBudget - (movieDecor + totalClothingPrice);
    if (moneyLeftOrNeeded >= 0) {
        console.log(`Action!\nWingard starts filming with ${moneyLeftOrNeeded.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money!\nWingard needs ${Math.abs(moneyLeftOrNeeded).toFixed(2)} leva more.`);
    }
}

godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["15437.62", "186", "57.99"]);
godzillaVsKong(["9587.88", "222", "55.68"]);