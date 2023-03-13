function worldSwimmingRecord(input) {

    let currentRecord = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let secondsPerMeter = Number(input[2]);

    let timeDelay = Math.floor(distanceInMeters / 15) *12.5;
    let totalSecondsForTheDistance = (distanceInMeters * secondsPerMeter) + timeDelay

    if (totalSecondsForTheDistance < currentRecord){
        console.log(`Yes, he succeeded! The new world record is ${totalSecondsForTheDistance.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${Math.abs(currentRecord - totalSecondsForTheDistance).toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord(["10464", "1500", "20"]);
worldSwimmingRecord(["55555.67", "3017", "5.03"]);