const myHouseholdSize = 3;
const myHomeSize = 2;
const myFoodChoices = 8;
const myWaterConsumption = 4;
const myPurchases = 2;
const myWaste = 20;
const myRecyledWaste = 8;
const myTransportation = 2;

// add all values to determine total carbon footprint score
const myFootprintTotal =
  myHouseholdSize +
  myFoodChoices +
  myWaterConsumption +
  myPurchases +
  myWaste +
  myRecyledWaste +
  myTransportation;

// push score value to html element

const myScore = document.getElementById("score");
myScore.innerHTML = myFootprintTotal;
