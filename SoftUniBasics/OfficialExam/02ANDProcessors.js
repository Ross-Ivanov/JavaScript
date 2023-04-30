function andProcesors(input) {

    let cpuToBeMade = Number(input[0]);
    let numberOfEmployees = Number(input[1]);
    let workingDays = Number(input[2]);

    let totalWorkingHours = numberOfEmployees * workingDays * 8
    let maxCpuToBeMade = Math.floor(totalWorkingHours / 3)

    let cpuDifference = cpuToBeMade - maxCpuToBeMade

    if (cpuDifference > 0) {
        console.log(`Losses: -> ${(cpuDifference * 110.10).toFixed(2)} BGN`);
    } else {
        console.log(`Profit: -> ${(Math.abs(cpuDifference)* 110.10).toFixed(2)} BGN`);
    }
}

andProcesors(["500", "8", "20"]);
andProcesors(["150", "7", "18"]);