import { cfpData } from "./start.js";
//function to render headings for the table
const TBL = document.getElementById("tab-data");

function renderTblHeading() {
  let table = TBL.querySelector("table");

  if (!table) {
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
  }
  return table;
}

function renderTbl() {
  const table = renderTblHeading();

  let tbody = table.querySelector(".tbody");

  if (!tbody) {
    tbody = document.createElement("tbody");
    table.appendChild(tbody);
  }

  for (const obj of cfpData) {
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.textContent = `${obj.fname}`;
    tr.appendChild(tdName);
    const tdMembers = document.createElement("td");
    tdMembers.textContent = `${obj.members}`;
    tr.appendChild(tdMembers);
    const tdSize = document.createElement("td");
    tdSize.textContent = `${obj.size}`;
    tr.appendChild(tdSize);
    const tdTotal = document.createElement("td");
    tdTotal.textContent = `${obj.total}`;
    tr.appendChild(tdTotal);

    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";

    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    tr.appendChild(td);
    tbody.appendChild(tr);
    table.appendChild(tbody);
  }
  TBL.appendChild(table);
}

export { renderTbl, TBL };
