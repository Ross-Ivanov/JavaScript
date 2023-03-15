function lunchBreak(input) {

    let tvSeriesName = input[0];
    let episodeLenght = Number(input[1]);
    let breakLenght = Number(input[2]);

    let luchTime = breakLenght * (1/8);
    let restTime = breakLenght * (1/4);

    let timeLeftOrNeeded = breakLenght - (luchTime + restTime + episodeLenght)

    if (timeLeftOrNeeded >= 0) {
        console.log(`You have enough time to watch ${tvSeriesName} and left with ${Math.ceil(timeLeftOrNeeded)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${tvSeriesName}, you need ${Math.ceil(Math.abs(timeLeftOrNeeded))} more minutes.`);
    }

}

lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);