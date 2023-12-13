console.log("tic tac toe");

let turn = "X";
let gameOver = false;

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// ------ User Won Logic ---------

const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let Wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  Wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        "Congratulation...  " + boxtext[e[0]].innerText + " " + "Won";
      gameOver = true;
    }
  });
};

// --------------Game Logic--------------

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      checkWin();
      if (!gameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn For : " + turn;
      }
    }
  });
});

// ------------------Reset Logic ---------------

replay.addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".boxtext");
  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  document.getElementsByClassName("info")[0].innerText = "Turn For : " + turn;
});
