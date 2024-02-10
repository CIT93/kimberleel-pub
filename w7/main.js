import { renderTbl, TBL } from "./render.js";
import { start, cfpData } from "./start.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");

//event listener for form when button is clicked
FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const fname = FORM.fname.value;
  const lname = FORM.lname.value;
  const householdMembers = parseInt(FORM.householdMembers.value);
  const houseSize = FORM.houseSize.value;
  start(householdMembers, houseSize, fname, lname);
  OUTPUT.innerHTML = "";
  TBL.innerHTML = "";
  //displayOutput();
  renderTbl(cfpData);
  FORM.reset();
});
