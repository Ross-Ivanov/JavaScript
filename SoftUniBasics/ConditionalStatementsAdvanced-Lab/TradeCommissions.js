function tradeCommissions(input) {
    let city = input[0];
    let salesVol = Number(input[1]);

    let commissionPercent = 0;

    switch (city) {
      case "Sofia":
        if (salesVol >= 0 && salesVol <= 500) {
          commissionPercent = 0.05;
        } else if (salesVol > 500 && salesVol <= 1000) {
          commissionPercent = 0.07;
        } else if (salesVol > 1000 && salesVol <= 10000) {
          commissionPercent = 0.08;
        } else if (salesVol > 10000) {
          commissionPercent = 0.12;
        }
        break;
      case "Varna":
        if (salesVol >= 0 && salesVol <= 500) {
          commissionPercent = 0.045;
        } else if (salesVol > 500 && salesVol <= 1000) {
          commissionPercent = 0.075;
        } else if (salesVol > 1000 && salesVol <= 10000) {
          commissionPercent = 0.1;
        } else if (salesVol > 10000) {
          commissionPercent = 0.13;
        }
        break;
      case "Plovdiv":
        if (salesVol >= 0 && salesVol <= 500) {
          commissionPercent = 0.055;
        } else if (salesVol > 500 && salesVol <= 1000) {
          commissionPercent = 0.08;
        } else if (salesVol > 1000 && salesVol <= 10000) {
          commissionPercent = 0.12;
        } else if (salesVol > 10000) {
          commissionPercent = 0.145;
        }
        break;
    }

    if (commissionPercent > 0) {
        console.log(`${(commissionPercent * salesVol).toFixed(2)}`);
    } else {
        console.log("error");
    }
}

tradeCommissions(["Sofia", "1500"]);
tradeCommissions(["Plovdiv", "499.99"]);
tradeCommissions(["Varna", "3874.50"]);
tradeCommissions(["Kaspichan", "-50"]);
