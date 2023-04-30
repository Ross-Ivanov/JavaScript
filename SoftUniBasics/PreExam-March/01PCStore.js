function pcStore(input) {

    let priceForCPU = Number(input[0]) * 1.57;
    let priceForGPU = Number(input[1]) * 1.57;
    let priceForRAM = Number(input[2]) * 1.57;
    let countOfRAM = Number(input[3]);
    let percentDiscount = Number(input[4]);

    let totalRamPrice = countOfRAM * priceForRAM;
    let finalCpuPrice = priceForCPU -(priceForCPU * percentDiscount);
    let finalGpuPrice = priceForGPU - (priceForGPU *percentDiscount);

    let totalPrice = totalRamPrice + finalCpuPrice + finalGpuPrice

    console.log(`Money needed - ${totalPrice.toFixed(2)} leva.`);
}

pcStore(["500", "200", "80", "2", "0.05"]);
pcStore(["1200", "850", "120", "4", "0.1"]);
pcStore(["200", "100", "80", "1", "0.01"])