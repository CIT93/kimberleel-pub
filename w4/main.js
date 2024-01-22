const cfpData = [];
function calcHouseSizePts(size) {
  let houseSizePts = 0;

  if (size === "large") {
    houseSizePts = 12;
  } else if (size === "medium") {
    houseSizePts = 7;
  } else if (size === "small") {
    houseSizePts = 4;
  } else if (size === "apartment") {
    houseSizePts = 2;
  }
  return houseSizePts;
}

function calchouseholdPoints(numberInHousehold) {
  let householdPoints = 0;

  if (numberInHousehold <= 6) {
    householdPoints = 16 - numberInHousehold * 2;
  } else {
    householdPoints = 2;
  }
  return householdPoints;
}

function start(householdMembers, houseSize) {
  const householdPts = calchouseholdPoints(householdMembers);
  const houseSizePts = calcHouseSizePts(houseSize);
  const total = householdPts + houseSizePts;
  cfpData.push([
    householdMembers,
    houseSize,
    householdPts,
    houseSizePts,
    total,
  ]);
}

function displayOutput() {
  for (arr of cfpData) {
    const output = document.getElementById("output");
    const newP = document.createElement("p");
    newP.textContent = `A household size of ${arr[0]} adds ${arr[2]} points to your Carbon Footprint. If you live in a(n) ${arr[1]} size home, add ${arr[3]} points.  Your total Carbon Footprint, thus far, is ${arr[4]} points.`;
    output.appendChild(newP);
  }
}

start(1, "apartment");
start(2, "small");
start(3, "medium");
start(4, "large");
start(5, "large");
start(6, "large");
start(7, "large");

displayOutput();
