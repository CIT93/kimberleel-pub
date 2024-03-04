import { renderTbl } from "./render.js";
import { calcHouseSizePts, calchouseholdPoints } from "./cfp.js";
import { FORM, ERROR } from "./global.js";
import { saveLS, cfpData } from "./storage.js";

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
  const fname = FORM.fname.value;
  const lname = FORM.lname.value;
  const householdMembers = parseInt(FORM.householdMembers.value);
  const houseSize = FORM.houseSize.value;
  let messages = [];
  if (fname === "" || fname == null) {
    messages.push("First Name is required");
  }
  if (lname === "" || lname == null) {
    messages.push("Last Name is required");
  }

  if (messages.length > 0) {
    e.preventDefault();
    ERROR.innerText = messages.join(", ");
  } else {
    start(householdMembers, houseSize, fname, lname);
    saveLS(cfpData);
    renderTbl(cfpData);
  }
  FORM.reset();
});

renderTbl(cfpData);
