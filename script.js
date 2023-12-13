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
    [0, 1, 2, 3, 7, 0],
    [3, 4, 5, 3, 15.5, 0],
    [6, 7, 8, 3, 24, 0],
    [0, 3, 6, -5.4, 15.2, 90],
    [1, 4, 7, 3.1, 15.2, 90],
    [2, 5, 8, 11.5, 15, 90],
    [0, 4, 8, 3, 15, 45],
    [2, 4, 6, 3, 15, 137],
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
      document.querySelector(".line").style.width = "20vw";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
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
  document.querySelector(".line").style.width = "0vw";

  document.getElementsByClassName("info")[0].innerText = "Turn For : " + turn;
});
