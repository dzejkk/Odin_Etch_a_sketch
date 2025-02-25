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
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "black";
    });
    divContainer.appendChild(cell);
  }
}

createGrid(gridSize);
