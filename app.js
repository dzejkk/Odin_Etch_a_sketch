let gridSize = 16;

function changeGrid() {
  gridSize = Number(prompt("enter grid size", 100));
}

function createGrid(size) {
  const divContainer = document.querySelector(".container");

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
