import { renderTbl } from "./render.js";
import { calcHouseSizePts, calchouseholdPoints } from "./cfp.js";

const FORM = document.getElementById("form");
const cfpData = [];

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

//event listener for form when button is clicked
FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const fname = FORM.fname.value;
  const lname = FORM.lname.value;
  const householdMembers = parseInt(FORM.householdMembers.value);
  const houseSize = FORM.houseSize.value;
  start(householdMembers, houseSize, fname, lname);
  renderTbl(cfpData);
  FORM.reset();
});
