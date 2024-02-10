import { renderTbl } from "./render.js";
import { start, cfpData } from "./start.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");

//function to render output to the dom
function displayOutput() {
  for (const obj of cfpData) {
    const newH1 = document.createElement("h1");
    newH1.textContent = `The Carbon Footprint for ${obj.fname} ${obj.lname} is ${obj.total} points.`;
    OUTPUT.appendChild(newH1);

    const newH3 = document.createElement("h3");
    newH3.textContent = `A family size of ${obj.members} adds ${obj.householdPts} pts to your Carbon Footprint. Living in a(n) ${obj.suize} home adds ${obj.houseSizePts} pts, bringing your total Carbon Footprint to ${obj.total} pts.`;
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
  const fname = FORM.fname.value;
  const lname = FORM.lname.value;
  const householdMembers = parseInt(FORM.householdMembers.value);
  const houseSize = FORM.houseSize.value;
  start(householdMembers, houseSize, fname, lname);
  OUTPUT.innerHTML = "";
  //displayOutput();
  renderTbl(cfpData);
  FORM.reset();
});
