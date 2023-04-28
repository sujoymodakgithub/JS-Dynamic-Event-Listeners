let myContainerElement = document.getElementById("myContainer");
let createBtnElement = document.getElementById("createBtn");

createBtnElement.onclick = function () {
  let headingElement = document.createElement("h1");
  headingElement.textContent = "Main heading element";
  headingElement.style.color = "#0000ff";
  myContainer.appendChild(headingElement);
};
