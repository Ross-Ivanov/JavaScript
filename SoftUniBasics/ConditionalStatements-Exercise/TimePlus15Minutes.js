function timePlus15Minutes(input) {

    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    let totalMinutes = hour *60 + minutes +15;

    if (Math.floor(totalMinutes / 60) === 24){
        hour = 0;
    } else {
        hour = Math.floor(totalMinutes / 60);
    }

    minutes = ((totalMinutes % 60).toString()).padStart(2, 0);
    
    console.log(`${hour}:${minutes}`);
}

timePlus15Minutes(["1", "46"]);
timePlus15Minutes(["0", "01"]);
timePlus15Minutes(["23", "59"]);
timePlus15Minutes(["11", "08"]);
timePlus15Minutes(["12", "49"]);