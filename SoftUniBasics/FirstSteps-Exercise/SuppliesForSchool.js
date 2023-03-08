function suppliesForSchool(input) {

    let pensPackPrice = 5.80;
    let markerPackPrice = 7.20;
    let cleanerLiterPrice = 1.20;

    let pensPackCount = Number(input[0]);
    let markerPackCount = Number(input[1]);
    let cleanerLitersCount = Number(input[2]);
    let discountPercentage = Number(input[3]);

    let billBeforeDiscount = pensPackCount * pensPackPrice + markerPackCount * markerPackPrice + cleanerLitersCount * cleanerLiterPrice ;
    let finalPrice = billBeforeDiscount - (billBeforeDiscount * discountPercentage/100);

    console.log(finalPrice);
}

suppliesForSchool(["2 ", "3 ", "4 ", "25 "]);
suppliesForSchool(["4 ", "2 ", "5 ", "13 "]);