function fishTank(input) {

    let lenght = Number (input[0]);
    let width = Number (input[1]);
    let height = Number (input[2]);
    let percentFilled = Number (input[3])/100;

    let fishTankVolumeInLiters = (lenght * width * height)/1000;
    let totalLitersNeeded = fishTankVolumeInLiters * (1-percentFilled);

    console.log(totalLitersNeeded);
}

fishTank(["85 ", "75 ", "47 ", "17 "]);
fishTank(["105 ", "77 ", "89 ", "18.5 "]);