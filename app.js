const divContainer = document.querySelector(".container");

/*Creating DOM elements*/

for (let i = 0; i < 256; i++) {
  const newBox = document.createElement("div");
  newBox.className = "box";
  divContainer.appendChild(newBox);
}
