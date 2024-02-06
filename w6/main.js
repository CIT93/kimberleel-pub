const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
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
function start(householdMembers, houseSize) {
  const householdPts = calchouseholdPoints(householdMembers);
  const houseSizePts = calcHouseSizePts(houseSize);
  const total = householdPts + houseSizePts;
  cfpData.push({
    fname: fname,
    lname: lname,
    members: householdMembers,
    houseSize: houseSize,
    householdPts: householdPts,
    houseSizePts: houseSizePts,
    total: total,
  });
}

//function to render output to the dom
function displayOutput() {
  for (const obj of cfpData) {
    const newH1 = document.createElement("h1");
    newH1.textContent = `The Carbon Footprint for ${obj.fname} ${obj.lname} is ${obj.total} points.`;
    OUTPUT.appendChild(newH1);

    const newH3 = document.createElement("h3");
    newH3.textContent = `A family size of ${obj.members} adds ${obj.householdPts} pts to your Carbon Footprint. Living in a(n) ${obj.houseSize} home adds ${obj.houseSizePts} pts, bringing your total Carbon Footprint to ${obj.total} pts.`;
    OUTPUT.appendChild(newH3);
    newH3.style.border = "1px dashed gray";
    newH3.style.padding = "15px";
  }

  OUTPUT.style.width = "70%";
  OUTPUT.style.margin = "0 auto";
}

//event listener for form when button is clicked
FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  fname = FORM.fname.value;
  lname = FORM.lname.value;
  const householdMembers = parseInt(FORM.householdMembers.value);
  const houseSize = FORM.houseSize.value;
  start(householdMembers, houseSize);
  OUTPUT.innerHTML = "";
  displayOutput();
  FORM.reset();
});

//the aprtment score is not correct because javascript still shows apt

//built in validation is used because we assume users will not give us good data.
