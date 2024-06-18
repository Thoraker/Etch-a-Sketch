const btn = document.querySelector("button");
let input = 16;
btn.addEventListener("click", () => {
  let newGridSize = prompt("Enter new grid size");
  if (newGridSize > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }
  const row = document.querySelectorAll(".row");
  const column = document.querySelectorAll(".column");
  row.forEach((grid) => grid.remove());
  column.forEach((grid) => grid.remove());
  createGrid(newGridSize);
});

function createGrid(input) {
  const divContainer = document.querySelector(".container");
  let gridSize = input;
  for (let i = 0; i < gridSize; i++) {
    let column = document.createElement("div");
    column.classList.add("column");
    for (let j = 1; j <= gridSize; j++) {
      let row = document.createElement("div");
      row.classList.add("row");
      // row.innerText = i * gridSize + j;
      column.appendChild(row);
    }
    divContainer.appendChild(column);
  }
  const boxes = document.querySelectorAll(".row");

  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = "red";
    });
  });
}

createGrid(input);
