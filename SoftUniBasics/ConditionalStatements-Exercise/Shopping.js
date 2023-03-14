function shopping(input) {

    let totalBudget = Number(input[0]);
    let graphicCardQty = Number(input[1]);
    let cpuQty = Number(input[2]);
    let ramQty = Number(input[3]);

    //Parts Prices
    let graphicCardPrice = 250;
    let cpuPrice = (graphicCardQty * graphicCardPrice) * 0.35;
    let ramPrice = (graphicCardQty * graphicCardPrice) *0.1;

    let totalMoneyNeeded = graphicCardQty * graphicCardPrice + cpuQty * cpuPrice + ramQty * ramPrice;
    if (graphicCardQty > cpuQty) {
        totalMoneyNeeded *=0.85;
    }
    let moneyLeftOrNeeded = totalBudget - totalMoneyNeeded;

    if (moneyLeftOrNeeded >= 0) {
        console.log(`You have ${moneyLeftOrNeeded.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(moneyLeftOrNeeded).toFixed(2)} leva more!`);
    }
}

shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);