function yardGreening(input) {

    let totalArea = Number(input[0]);
    let pricePerSqMeter = 7.61;

    let totalSum = totalArea * pricePerSqMeter;
    let discount = totalSum * 0.18;
    let finalPrice = totalSum - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["550"]);
yardGreening(["150"]);