const container = document.querySelector("#board");

let gridSize = 16;
let mode = false;
const containerSize = 50;

function createGrid(size, mode) {
  container.innerHTML = "";

  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // 1.7 is an arbitrary number that'd make the squares fit
  const squareSize = containerSize / size / 1.7;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    container.appendChild(square);
    square.classList.add("square");
    square.style.width = `${squareSize}em`;
    square.style.height = `${squareSize}em`;
    square.addEventListener("mouseover", () => {
      if (mode === true) {
        square.style.backgroundColor = `rgb(${Math.floor(
          Math.random() * 256
        )},${Math.floor(Math.random() * 256)},${Math.floor(
          Math.random() * 256
        )})`;
      } else {
        square.style.backgroundColor = "black";
      }
    });
  }
}

createGrid(gridSize);

const resetButton = document.querySelector("#resetBtn");
resetButton.addEventListener("click", () => {
  gridSize = 16; // reset grid size to 16
  createGrid(gridSize);
});

const rainbowButton = document.querySelector("#rainbowBtn");
rainbowButton.addEventListener("click", () => {
  mode = true;
  createGrid(gridSize, mode);
});

const gridButton = document.querySelector("#setGridBtn");
gridButton.addEventListener("click", () => {
  const newGridSize = prompt("Set size of Grid");
  if (!(newGridSize < 2 || newGridSize > 100)) {
    gridSize = parseInt(newGridSize);
    createGrid(gridSize);
  }
});

const clearButton = document.querySelector("#clearBtn");
clearButton.addEventListener("click", () => {
  // store current grid size & mode
  const tempGridSize = gridSize;
  const tempMode = mode;
  // clear the grid
  createGrid(gridSize, mode);
  // restore grid size after clearing & mode
  gridSize = tempGridSize;
  mode = tempMode;
});
