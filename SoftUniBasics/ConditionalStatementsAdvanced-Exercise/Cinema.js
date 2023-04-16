function cinema(input){

    let projectionType = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let totalPrice = 0;

    if (projectionType == "Premiere") {
        totalPrice = rows * columns * 12.00;
    }else if (projectionType == "Normal") {
        totalPrice = rows * columns * 7.50;
    }else if (projectionType == "Discount") {
        totalPrice = rows * columns * 5.00
    }

    console.log(`${totalPrice.toFixed(2)} leva`);
}


cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);
