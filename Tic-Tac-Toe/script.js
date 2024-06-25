let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // playerX, playerO
var count = 0;

// Winning combinations/possibilities/patterns
const winningCombos = [
  [0, 1, 2], // 1st row
  [3, 4, 5], // 2nd row
  [6, 7, 8], // 3rd row
  [0, 3, 6], // 1st column
  [1, 4, 7], // 2nd column
  [2, 5, 8], // 3rd column
  [0, 4, 8], // 1st diagonal
  [2, 4, 6], // 2nd diagonal
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    count = 0;
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // box.innerText = turnO ? "O" : "X";
    if(turnO) {
        box.innerText = "O";
    } else {
        box.innerText = "X";
        box.style.color = "black";
    }
    turnO = !turnO; // switch turns
    box.disabled = true; // disable the box after it's clicked

    checkWinner();
    count++;
    if(count === 9) {
        msg.innerText = "It's a draw!";
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
  });
});

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
    
}

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
    msgContainer.classList.add("hide");
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations! ${winner} wins!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner = () => {
  for (let pattern of winningCombos) {
    let position1 = boxes[pattern[0]].innerText;
    let position2 = boxes[pattern[1]].innerText;
    let position3 = boxes[pattern[2]].innerText;

    if(position1 !== "" && position2 !== "" && position3 !== "") {
      if(position1 === position2 && position2 === position3) {
        showWinner(position1);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame );
resetBtn.addEventListener("click", resetGame );

/*
TODO : 
- Display when it's a draw
*/