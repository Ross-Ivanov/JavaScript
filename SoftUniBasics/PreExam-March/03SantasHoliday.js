function santasHoliday (input) {

    let daysHoliday = Number(input[0]) -1;
    let roomType = input[1];
    let feedbackScore = input[2];
    let pricePerNight = 0;
    let discount = 0
    let totalPrice = 0;

    switch (roomType){
        case "apartment":
            pricePerNight = 25;
            if(daysHoliday < 10){
                discount = 0.3;
            }else if(daysHoliday <= 15){
                discount = 0.35;
            }else{
                discount = 0.5;
            }
            break;
        case "president apartment":
            pricePerNight = 35;
            if (daysHoliday < 10) {
              discount = 0.1;
            } else if (daysHoliday <= 15) {
              discount = 0.15;
            } else {
              discount = 0.2;
            }
            break;
        default:
            pricePerNight = 18;

    }
 totalPrice = (daysHoliday * pricePerNight) * (1-discount);
    if (feedbackScore === "positive"){
        totalPrice *= 1.25;
    } else {
        totalPrice  *= 0.9;
    }
    console.log(totalPrice.toFixed(2));
}

santasHoliday(["14", "apartment", "positive"]);
santasHoliday(["30", "president apartment", "negative"]);