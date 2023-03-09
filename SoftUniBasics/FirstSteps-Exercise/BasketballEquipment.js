function basketballEquipment(input) {

    let taxPerYear = Number (input[0]);

    let shoesPrice = taxPerYear * 0.6 ;
    let jerseyPrice = shoesPrice * 0.8;
    let ballPrice = jerseyPrice * (1/4);
    let accessoriesPrice = ballPrice * (1/5)

    let totalExpenses = taxPerYear + shoesPrice + jerseyPrice + ballPrice + accessoriesPrice

    console.log(totalExpenses);

}

basketballEquipment(["365 "]);
basketballEquipment(["550 "]);