function petShop(input) {
  let dogsFoodPackages = Number(input[0]);
  let catsFoodPackages = Number(input[1]);

  let dogFoodPrice = 2.5;
  let catFoodPrice = 4;

  let totalPrice =
    dogsFoodPackages * dogFoodPrice + catsFoodPackages * catFoodPrice;
  console.log(`${totalPrice} lv.`);
}

petShop(["5", "4"]);
petShop(["13", "9"]);
