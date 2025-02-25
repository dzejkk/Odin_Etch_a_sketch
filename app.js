const divContainer = document.querySelector(".container");
const box = document.querySelectorAll(".box");

/*Creating DOM elements*/

document.addEventListener("DOMContentLoaded", (event) => {
  for (let i = 0; i < 256; i++) {
    const newBox = document.createElement("div");
    newBox.className = "box";
    divContainer.appendChild(newBox);
  }
});

divContainer.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "violet";
});
