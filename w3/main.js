function calcFootprints() {
  let footprintPts = 0;

  // set variable to the numberInHousehold input value
  const numberInHousehold = parseInt(
    document.getElementById("numberInHousehold").value
  );

  // set variable to houseSize select value
  const houseSize = document.getElementById("houseSize").value;

  // create function to calculate footprint pts per numberInHousehold input value
  if (numberInHousehold <= 6) {
    footprintPts = 16 - numberInHousehold * 2;
    document.getElementById("results").textContent = footprintPts;
  } else {
    footprintPts = 2;
    document.getElementById("results").textContent = footprintPts;
  }

  // create function to calculate footprint pts per houseSize selection
  if (houseSize == "apartment") {
    footprintPts = footprintPts + 2;
  } else if (houseSize == "small") {
    footprintPts = footprintPts + 4;
  } else if (houseSize == "medium") {
    footprintPts = footprintPts + 7;
  } else if (houseSize == "large") {
    footprintPts = footprintPts + 10;
  }
  document.getElementById("results").textContent = footprintPts;
}

// create function to set all fields when butto clicked
function resetForm() {
  document.getElementById("results").textContent = 0;
}
