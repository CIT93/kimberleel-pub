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

function displayObj(obj) {
  console.log(obj);
  const output = document.getElementById("output");
  const newH2 = document.createElement("h2");
  newH2.textContent = `Your Carbon Footprint is ${obj.total}`;
  const newP = document.createElement("p");
  newP.textContent = "How your Carbon Footprint is calculated:";
  const newH3 = document.createElement("h3");
  newH3.textContent = `A household size of ${obj.members} adds ${obj.householdPts} points to your Carbon Footprint.`;
  newH3.textContent += ` Then add ${obj.houseSizePts} points if your live in a(n) ${obj.size} home.`;
  output.appendChild(newH2);
  output.appendChild(newP);
  output.appendChild(newH3);
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

function display() {
  for (obj of cfpData) {
    console.log(obj);
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Your Carbon Footprint is ${obj.total}`;
    output.appendChild(newH2);
  }
}

start(1, "apartment");
start(2, "small");
start(3, "medium");
start(4, "large");
start(5, "large");
start(6, "large");
start(7, "large");
display();
