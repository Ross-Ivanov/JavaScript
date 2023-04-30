function catFood (input) {
    let numberOfCats = Number(input[0]);

    let groupOne = 0;
    let groupTwo = 0;
    let groupThree = 0;
    let totalGrams = 0;

    for(let counter = 1; counter <=numberOfCats; counter++){
        let currentGrams = Number (input[counter]);
        totalGrams +=currentGrams;

        if(currentGrams < 200){
            groupOne+=1
        }else if(currentGrams < 300){
            groupTwo +=1
        } else{
            groupThree+=1
        }
    }
    let totalDailyPrice = (totalGrams /1000) *12.45;
    console.log(`Group 1: ${groupOne} cats.`);
    console.log(`Group 2: ${groupTwo} cats.`);
    console.log(`Group 3: ${groupThree} cats.`);
    console.log(`Price for food per day: ${totalDailyPrice.toFixed(2)} lv.`);

}

catFood(["6", "102", "236", "123", "399", "342", "222"]);
catFood(["10", "256", "348", "198", "322", "186", "294", "321", "100", "200", "300"])
catFood(["7", "100", "200", "342", "300", "234", "123", "212"]);