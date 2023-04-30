function summerOutfit(input) {

    let degrees = Number(input[0]);
    let dayTime = input[1];

    let outfit = "";
    let shoes ="";

    switch (dayTime){
        case "Morning":
            if (degrees >= 10 && degrees <= 18){
                outfit = "Sweatshirt";
                shoes = "Sneakers";
            }else if(degrees> 18 && degrees <=24){
                outfit = "Shirt";
                shoes = "Moccasins";
            }else if(degrees > 24){
                outfit = "T-Shirt";
                shoes = "Sandals";
            }
            break;
        case "Afternoon":
            if (degrees >= 10 && degrees <= 18) {
              outfit = "Shirt";
              shoes = "Moccasins";
            } else if (degrees > 18 && degrees <= 24) {
              outfit = "T-Shirt";
              shoes = "Sandals";
            } else if (degrees > 24) {
              outfit = "Swim Suit";
              shoes = "Barefoot";
            }
            break;
        default:
            outfit = "Shirt";
            shoes = "Moccasins";
    }
    
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(["16", "Morning"]);
summerOutfit(["22", "Afternoon"]);
summerOutfit(["28", "Evening"]);

