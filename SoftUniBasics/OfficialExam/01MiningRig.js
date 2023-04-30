function miningRig(input) {

    let pricePerGpu = Number(input[0]);
    let pricePerAdaptor = Number(input[1]);
    let electricityDailyConsumption = Number(input[2]);
    let dailyProfit = Number(input[3]);

    let moneySpent = (pricePerGpu * 13) + (pricePerAdaptor * 13) + 1000;
    let profitMinusConsumption = (dailyProfit - electricityDailyConsumption) * 13;
    let daysForInvestmentReturn = moneySpent/ profitMinusConsumption 
    console.log(moneySpent)
    console.log(Math.ceil(daysForInvestmentReturn));
}


miningRig(["700", "15", "0.20", "2"]);
miningRig(["800", "10", "0.32", "6.4"]);