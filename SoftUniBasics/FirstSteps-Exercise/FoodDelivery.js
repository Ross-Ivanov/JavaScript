function foodDelivery(input) {

    let chickenMeal = 10.35;
    let fishMeal = 12.40;
    let veggiMeal = 8.15;
    let deliveryPrice = 2.50

    let chickenMealCount = Number (input[0]);
    let fishMealCount = Number (input[1]);
    let veggiMealCount = Number (input[2]);

    let finalBill = ((chickenMealCount * chickenMeal + fishMealCount * fishMeal + veggiMealCount * veggiMeal) * 1.2)+ deliveryPrice
    
    console.log(finalBill);
}

foodDelivery(["2 ", "4 ", "3 "]);
foodDelivery(["9 ", "2 ", "6 "]);