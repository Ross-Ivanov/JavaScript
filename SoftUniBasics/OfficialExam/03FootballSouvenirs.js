function footballSouvenirs(input) {

    let team = input[0];
    let souvenirType = input[1];
    let countOfSouvenirs = Number(input[2]);
    let souvenirPrice = 0
    switch (team) {
      case "Argentina":
        if (souvenirType == "flags") {
            souvenirPrice = 3.25;
        } else if (souvenirType == "caps") {
            souvenirPrice = 7.20;
        } else if (souvenirType == "posters") {
            souvenirPrice = 5.10;
        } else if (souvenirType == "stickers") {
            souvenirPrice = 1.25;
        } else {
            console.log("Invalid stock!");
        }
        break;
      case "Brazil":
        if (souvenirType == "flags") {
          souvenirPrice = 4.20;
        } else if (souvenirType == "caps") {
          souvenirPrice = 8.50;
        } else if (souvenirType == "posters") {
          souvenirPrice = 5.35;
        } else if (souvenirType == "stickers") {
          souvenirPrice = 1.20;
        } else {
          console.log("Invalid stock!");
        }
        break;
      case "Croatia":
        if (souvenirType == "flags") {
          souvenirPrice = 2.75;
        } else if (souvenirType == "caps") {
          souvenirPrice = 6.90;
        } else if (souvenirType == "posters") {
          souvenirPrice = 4.95;
        } else if (souvenirType == "stickers") {
          souvenirPrice = 1.10;
        } else {
          console.log("Invalid stock!");
        }
        break;
      case "Denmark":
        if (souvenirType == "flags") {
          souvenirPrice = 3.10;
        } else if (souvenirType == "caps") {
          souvenirPrice = 6.50;
        } else if (souvenirType == "posters") {
          souvenirPrice = 4.80;
        } else if (souvenirType == "stickers") {
          souvenirPrice = 0.90;
        } else {
          console.log("Invalid stock!");
        }
        break;
      default:
        console.log("Invalid country!");

    }
    let totalPrice = souvenirPrice * countOfSouvenirs
    if (souvenirPrice !==0){
        console.log(`Pepi bought ${countOfSouvenirs} ${souvenirType} of ${team} for ${totalPrice.toFixed(2)} lv.`);
    }
}

footballSouvenirs(["Brazil", "stickers", "5"]);
footballSouvenirs(["Denmark", "caps", "8"]);
footballSouvenirs(["Croatia", "flags", "13"]);
footballSouvenirs(["USA", "caps", "18"]);
footballSouvenirs(["Argentina", "shirts", "35"]);