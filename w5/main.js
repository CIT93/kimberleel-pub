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
  cfpData.push({
    members: householdMembers,
    size: houseSize,
    householdPts: householdPts,
    houseSizePts: houseSizePts,
    total: total,
  });
}

function allCombinations() {
  const members = [1, 2, 3, 4, 5, 6, 7];
  const size = ["apartment", "small", "medium", "large"];
  for (let i = 0; i < members.length; i++) {
    for (let j = 0; j < size.length; j++) {
      start(members[i], size[j]);
    }
  }
}

function display() {
  const newH1 = document.createElement("h1");
  newH1.textContent = "All Possible Combinations";
  output.appendChild(newH1);
  for (obj of cfpData) {
    const newH3 = document.createElement("h3");
    newH3.textContent = `If your family size is ${obj.members} (${obj.householdPts} pts.) and live in a ${obj.size} house (${obj.houseSizePts} pts.), your total Carbon Footprint would be ${obj.total} pts.`;
    output.appendChild(newH3);
    output.style.width = "70%";
    output.style.margin = "0 auto";
    newH3.style.border = "1px dashed gray";
    newH3.style.padding = "15px";
  }
}

allCombinations();
display();
