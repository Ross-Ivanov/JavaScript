function  areaOfFigures(input) {

    let figure = input[0];
    let firstSide = Number(input[1]);
    let secondSide = Number(input[2]);

    if (figure == "square") {
        console.log((firstSide * firstSide).toFixed(3));
    } else if ( figure == "rectangle") {
        console.log((firstSide * secondSide).toFixed(3));
    } else if (figure == "circle") {
        console.log((Math.PI * (firstSide * firstSide)).toFixed(3));
    } else if (figure == "triangle") {
        console.log(((firstSide * secondSide)/2).toFixed(3));
    }


}

areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle", "7", "2.5"]);
areaOfFigures(["circle", "6"]);
areaOfFigures(["triangle", "4.5", "20"]);
