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

    const newH2 = document.createElement("h2");
    newH2.textContent = `Your Carbon Footprint is ${arr[4]}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = "How your Carbon Footprint is calculated:";
    const newP = document.createElement("p");
    newP.textContent = `A household size of ${arr[0]} adds ${arr[2]} points to your Carbon Footprint.`;
    newP.textContent += ` Then add ${arr[3]} points if your live in a(n) ${arr[1]} home.`;
    newP.style.borderBottom = "1px solid gray";

    output.appendChild(newH2);
    output.appendChild(newH3);
    output.appendChild(newP);
  }
}

start(2, "small");
start(3, "medium");
start(4, "large");
start(5, "large");
start(6, "large");
start(7, "large");

displayOutput();
