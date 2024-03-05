import { renderTbl } from "./render.js";
import { calcHouseSizePts, calchouseholdPoints } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";

//function to create array with cfp data
const start = (householdMembers, houseSize, fname, lname) => {
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
};

// Function to validate a single field
const validateField = (event) => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === "") {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add("invalid");
  } else {
    fieldError.textContent = "";
    event.target.classList.remove("invalid");
  }
};

// Attach blur event listeners
FNAME.addEventListener("blur", validateField);
LNAME.addEventListener("blur", validateField);

//event listener for form when button is clicked
FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  if (FNAME.value !== "" && LNAME.value !== "") {
    SUBMIT.textContent = "";
    start(
      parseInt(FORM.householdMembers.value),
      FORM.houseSize.value,
      FNAME.value,
      LNAME.value
    );
    saveLS(cfpData);
    renderTbl(cfpData);

    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first and last name to submit";
  }
});

renderTbl(cfpData);
