function pinCodes (input){
    let firstNumber = Number(input[0])
    let secondNumber = Number(input[1])
    let thirdNumber = Number(input[2])


    for (let startFirst = 2; startFirst <= firstNumber; startFirst +=2){
        for (let startSecond = 2; startSecond <= secondNumber; startSecond++){
            for(let startThird = 2; startThird <= thirdNumber; startThird +=2){
                if (startSecond === 2 || startSecond === 3 || startSecond === 5 || startSecond === 7){
                    console.log(startFirst, startSecond, startThird);
                }
                

            }
        }
    }
}

// pinCodes(["3", "5", "5"]);
pinCodes(["8", "2", "8"]);