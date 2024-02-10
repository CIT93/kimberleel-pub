const cfpData = [];

//function to assign points per size of home
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

// function to calculate formula based on number of memebers in home
function calchouseholdPoints(numberInHousehold) {
  let householdPoints = 0;
  if (numberInHousehold <= 6) {
    householdPoints = 16 - numberInHousehold * 2;
  } else {
    householdPoints = 2;
  }
  return householdPoints;
}

//function to create array with cfp data
function start(householdMembers, houseSize, fname, lname) {
  const householdPts = calchouseholdPoints(householdMembers);
  const houseSizePts = calcHouseSizePts(houseSize);
  const total = householdPts + houseSizePts;
  cfpData.push({
    fname: fname,
    lname: lname,
    members: householdMembers,
    size: houseSize,
    householdPts: householdPts,
    houseSizePts: houseSizePts,
    total: total,
  });
}

export { start, cfpData };
