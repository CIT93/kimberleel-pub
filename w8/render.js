const TBL = document.getElementById("tab-data");
const FORM = document.getElementById("form");

//function to render headings for the table
function renderTblHeading() {
  let table = TBL.querySelector("table");

  table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTxtArr = [
    "Name",
    "No. in Home",
    "House Size",
    "Carbon Footprint",
    "Action",
  ];
  headingTxtArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);

  return table;
}

//function to render the buttons
function renderButtons(obj, index, data) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  btnEdit.textContent = "Edit";
  const btnDel = document.createElement("button");
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);

  btnDel.addEventListener("click", function (e) {
    data.splice(index, 1);
    renderTbl(data);
  });

  btnEdit.addEventListener("click", function (e) {
    FORM[1].value = obj.fname;
    FORM[2].value = obj.lname;
    FORM[3].value = obj.members;
    FORM[4].value = obj.size;

    data.splice(index, 1);
    renderTbl(data);
  });
  return td;
}

//funtion to create the rows of the
function createRow(data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(obj)) {
      if (key !== "lname" && key !== "householdPts" && key !== "houseSizePts") {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
    }
    const td = renderButtons(obj, index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });

  return tbody;
}

function renderTbl(data) {
  TBL.innerHTML = "";
  if (data.length !== 0) {
    const table = renderTblHeading();
    const tbody = createRow(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
  }
}

export { renderTbl };
