document.body.onload = boardColor;
const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
const numbers = [8, 7, 6, 5, 4, 3, 2, 1];
const board = document.querySelector("#board");

function addSquare(rowStart, colStart, rowEnd, colEnd, className, id) {
  const newSqr = document.createElement("div");
  board.appendChild(newSqr);
  newSqr.style.gridArea = `${rowStart} / ${colStart} / ${rowEnd} / ${colEnd}`;
  newSqr.className = `${className}`;
  newSqr.id = `${id}`;
}

const pieces = {
  white: {
    rook: { points: 5, notation: "R", amount: 2 },
    knight: { points: 3, notation: "Kn", amount: 2 },
    bishop: { points: 3, notation: "B", amount: 2 },
    queen: { points: 9, notation: "Q", amount: 1 },
    king: { points: null, notation: "K", amount: 1 },
    pawn: { points: 1, notation: "P", amount: 8 },
  },
  black: {
    rook: { points: 5, notation: "R", amount: 2 },
    knight: { points: 3, notation: "Kn", amount: 2 },
    bishop: { points: 3, notation: "B", amount: 2 },
    queen: { points: 9, notation: "Q", amount: 1 },
    king: { points: null, notation: "K", amount: 1 },
    pawn: { points: 1, notation: "P", amount: 8 },
  },
};

function addPiece(num, letter) {
  let piece;
  let id;
  const color = num === 1 || num === 2 ? "white" : "black";
  const newPiece = document.createElement("button");
  if (num === 2 || num === 7) {
    //Pawn setup
    piece = (color === "black" ? "B." : "W.") + pieces[color].pawn.notation;
  } else if (num === 1 || num === 8) {
    // Other pieces
    switch (letter) {
      case "a":
      case "h":
        piece = (color === "black" ? "B." : "W.") + pieces[color].rook.notation;
        break;
      case "b":
      case "g":
        piece =
          (color === "black" ? "B." : "W.") + pieces[color].knight.notation;
        break;
      case "c":
      case "f":
        piece =
          (color === "black" ? "B." : "W.") + pieces[color].bishop.notation;
        break;
      case "d":
        piece =
          (color === "black" ? "B." : "W.") + pieces[color].queen.notation;
        break;
      case "e":
        piece = (color === "black" ? "B." : "W.") + pieces[color].king.notation;
        break;
    }
  }
  newPiece.append(piece);
  newPiece.className = color === "black" ? "black" : "white";
  const coordinate = document.querySelector(`#${letter}${num}`);
  console.log(coordinate, piece, color, num, newPiece);
  coordinate.appendChild(newPiece);
}

function boardColor() {
  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      addSquare(
        i,
        j,
        i + 1,
        j + 1,
        (i + j) % 2 ? "s1" : "s2",
        `${letters[j - 1]}${numbers[i - 1]}`
      );
      if (i < 3 || i > 6) addPiece(numbers[i - 1], letters[j - 1]);
    }
  }
}
