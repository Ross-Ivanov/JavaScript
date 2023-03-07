function depositCalculator(input) {

    let depositedAmount = Number(input[0])
    let depositTime = Number(input[1])
    let interestPercentage = Number(input[2]); 

    let totalSum = depositedAmount + depositTime* ((depositedAmount * interestPercentage/100)/12)

    console.log(totalSum);
}

depositCalculator(["200 ", "3 ", "5.7 "]);
depositCalculator(["2350", "6 ", "7 "]);