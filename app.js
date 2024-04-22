let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#NewGame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



let turn0 = true;

let count = 0;

const winPattern = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];

const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide");
  count = 0;
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "0";
      
      turn0 = false;
      
    }
    else{
      box.innerText = "x";
      
      
      
      turn0 = true;
      
    }

    box.disabled = true;

    let isWinner = checkWinner(); 

    count++;

    draw(count);



  } );


});

let disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;

  }
}

let enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";

  }
}

let showWinner = (winner) =>  {
  msg.innerText = `congratulation winner is "${winner}"`;
  msgContainer.classList.remove("hide");
  disableBoxes();

}

let draw = (count) => {

  if(count === 9){
    msg.innerText = `game is Draw`;
    msgContainer.classList.remove("hide");
  }
}

const checkWinner = () => {
  for (pattern of winPattern){
    

    let posval1 = boxes[pattern[0]].innerText;
    let posval2 = boxes[pattern[1]].innerText;
    let posval3 = boxes[pattern[2]].innerText;

    if (posval1 != "" && posval2 != "" && posval3 != "" ){
      if (posval1 === posval2 && posval2 === posval3) {
        
        showWinner(posval1);
      }
    }



  }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);



