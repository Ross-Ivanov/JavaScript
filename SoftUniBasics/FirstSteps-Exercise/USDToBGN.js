function usdToBgn(input) {
    
    let usd = Number(input[0]);
    let exchangeRate = 1.79549;

    console.log(usd*exchangeRate);
}

usdToBgn(["22"]);
usdToBgn(["100"]);
usdToBgn(["12.5"]);