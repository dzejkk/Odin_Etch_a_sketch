let gridSize = 16;

function changeGrid() {
  gridSize = Number(prompt("Enter grid size", 100));

  // Ensure the input is a valid number and within a reasonable range
  if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  createGrid(gridSize);
}

function createGrid(size) {
  const divContainer = document.querySelector(".container");

  //clear previus grid
  divContainer.innerHTML = "";

  const cellSize = 960 / size;

  //generate grid

  for (let i = 0; i < size * size; i++) {
    let cell = document.createElement("div");

    cell.classList.add("box");
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;

    cell.addEventListener("mouseover", (e) => {
      if (isErasing) {
        cell.style.backgroundColor = "aliceblue"; // Erase when middle mouse is held
      } else {
        cell.style.backgroundColor = "black"; // Draw normally
      }
    });

    divContainer.appendChild(cell);
  }
}

// Variable to track middle button press
let isErasing = false;

// Detect middle button hold
document.addEventListener("mousedown", (e) => {
  if (e.button === 1) {
    isErasing = true;
  }
});

// Detect when the button is released
document.addEventListener("mouseup", () => {
  isErasing = false;
});

createGrid(gridSize);

//clear canvas
function clearCanvas() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.style.backgroundColor = "aliceblue";
  });
}
