document.body.onload = boardColor;

const board = document.querySelector("#board");

function addSquare2(rowStart, colStart, rowEnd, colEnd, className) {
  const newSqr = document.createElement("div");
  board.appendChild(newSqr);
  newSqr.style.gridArea = `${rowStart} / ${colStart} / ${rowEnd} / ${colEnd}`;
  newSqr.className = `${className}`;
}

function boardColor() {
  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      if ((i + j) % 2) {
        addSquare2(i, j, i + 1, j + 1, "s2");
      } else {
        addSquare2(i, j, i + 1, j + 1, "s1");
      }
    }
  }
}
