function excursionSale (input) {
    index = 0;
    let maxSeaTrips = Number(input[index]);
    index++;
    let maxMountainTrips = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let profit = 0
    while (command != "Stop"){

        if(command === "sea"){
            if(maxSeaTrips == 0){
                command = input[index];
                index++
                continue
            }else{
                profit += 680;
                maxSeaTrips -=1
            }

        }else if (command ==="mountain"){
            if(maxMountainTrips == 0){
                command = input[index];
                index++
                continue
            }else{
                profit += 499;
                maxMountainTrips -=1
            }

        }
        if(maxMountainTrips ==0 && maxSeaTrips ==0){
            console.log("Good job! Everything is sold.");
            break
        }
        command = input[index];
        index++;
    }

    console.log(`Profit: ${profit} leva.`)
}

excursionSale(["2", "2", "sea", "mountain", "sea", "sea", "mountain"]);
excursionSale(["6","3","sea","mountain","mountain","mountain","sea","Stop"]);