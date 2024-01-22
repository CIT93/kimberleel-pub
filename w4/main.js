const cfpData = [];
function calcHouseSizePts(size) {
  let houseSizePts = 0;

  if (size === "large") {
    houseSizePts = 12;
  } else if (size === "medium") {
    houseSizePts = 7;
  } else if (size === "small") {
    hosueSizePts = 4;
  } else if (size === "apt") {
    houseSizePts = 2;
  }
  return houseSizePts;
}

function calchouseholdPoints(numberInHousehold) {
  let householdPoints = 0;

  if (numberInHousehold === 1) {
    householdPoints = 14;
  } else if (numberInHousehold === 2) {
    householdPoints = 12;
  } else if (numberInHousehold === 3) {
    householdPoints = 10;
  } else if (numberInHousehold === 4) {
    householdPoints = 8;
  } else if (numberInHousehold === 5) {
    householdPoints = 6;
  } else if (numberInHousehold === 6) {
    householdPoints = 4;
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

function displayOutput() {}
start(1, "apt");
start(2, "small");
start(3, "medium");
start(4, "large");
start(5, "large");
start(6, "large");
start(7, "large");

displayOutput();
