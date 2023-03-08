function repainting(input) {

  let nylonPricePerSqMeter = 1.5;
  let paintPricePerLiter = 14.5;
  let thinnerPricePerLiter = 5.0;
  let bagsPrice = 0.4;

  let nylonRequired = Number(input[0]) + 2;
  let paintRequired = Number(input[1]) * 1.1;
  let thinnerRequired = Number(input[2]);
  let hoursRequired = Number(input[3]);

  let totalMaterialCost = nylonRequired * nylonPricePerSqMeter + paintRequired * paintPricePerLiter + thinnerRequired * thinnerPricePerLiter + bagsPrice
  let jobPrice = (totalMaterialCost *0.3) * hoursRequired
  let totalPrice = totalMaterialCost + jobPrice

  console.log(totalPrice);
}
repainting(["10 ", "11 ", "4 ", "8 "]);
repainting(["5 ", "10 ", "10 ", "1 "]);
