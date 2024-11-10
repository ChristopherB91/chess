document.body.onload = boardColor;

const board = document.querySelector("#board");

function addSquare2(rowStart, colStart, rowEnd, colEnd, className, id) {
  const newSqr = document.createElement("div");
  board.appendChild(newSqr);
  newSqr.style.gridArea = `${rowStart} / ${colStart} / ${rowEnd} / ${colEnd}`;
  newSqr.className = `${className}`;
  newSqr.id = `${id}`;
}

function boardColor() {
  for (let i = 1; i <= 8; i++) {
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const numbers = [8, 7, 6, 5, 4, 3, 2, 1];
    for (let j = 1; j <= 8; j++) {
      {
        (i + j) % 2
          ? addSquare2(
              i,
              j,
              i + 1,
              j + 1,
              "s1",
              `${letters[j - 1]}${numbers[i - 1]}`
            )
          : addSquare2(
              i,
              j,
              i + 1,
              j + 1,
              "s2",
              `${letters[j - 1]}${numbers[i - 1]}`
            );
      }
    }
  }
}
