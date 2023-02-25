let nameCounter = 1;
let nameList = document.getElementById("nameList");

function addNameToList() {
  let nameInput = document.getElementById("nameInput");
  let name = nameInput.value.trim();

  if (name) {
    let li = document.createElement("li");
    li.textContent = nameCounter + "." + "" + name;
    nameList.appendChild(li);
    nameCounter++;
    nameInput.value = "";
  }
}

function clearNameList() {
  nameList.innerHTML = "";
  nameCounter = 1;
}

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addNameToList);

let clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", clearNameList);

let inputField = document.getElementById("nameInput");
inputField.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addNameToList();
  }
});