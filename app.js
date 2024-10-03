let boxes = document.querySelectorAll(".box");

let turnO = true;

let winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let count = 0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    count++;
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const enabledBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
  });
};
const disabledBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");
let newBtn = document.querySelector(".new-game");
newBtn.addEventListener("click", () => {
  msgContainer.classList.add("hide");
  resetBtn.classList.remove("hide");
  enabledBoxes();
  resetGame();
  
});
const showWinner = (winner) => {
  msg.innerHTML = `Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
  resetBtn.classList.add("hide");
};

const checkWinner = () => {
  for (let condition of winningConditions) {
    let pos1val = boxes[condition[0]].innerHTML;
    let pos2val = boxes[condition[1]].innerHTML;
    let pos3val = boxes[condition[2]].innerHTML;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val == pos2val && pos2val == pos3val) {
        console.log("Winner is " + pos1val);
        showWinner(pos1val);
      }
    }
    if (count == 9) {
      msg.innerHTML = `It's a tie`;
      msgContainer.classList.remove("hide");
      disabledBoxes();
      resetBtn.classList.add("hide");
    }
  }
};
const resetGame = () => {
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.disabled = false;
  });
  turnO = true;
  count = 0;
};
let resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", resetGame);
