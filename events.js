let xIsPlaying = true;
let gameGrid = [];
let endGame = false;
const buttons = document.querySelectorAll(".button");

// write X or O into the dialog box
const whoWins = (whoIsIt) => {
  if (whoIsIt) {
    return "X";
  } else {
    return "O";
  }
};

const checkEmptyCells = () => {
  for (const iterator of gameGrid) {
    console.log(iterator);
    if(iterator == undefined) {
      endGame = false
      return;
      } else {
        endGame = true;
      } 
    }
    
  }


// check if there are 3 same symbols in the row, column or diagonal
const checkWinner = () => {
  if (
    (gameGrid[0] === xIsPlaying &&
      gameGrid[1] === xIsPlaying &&
      gameGrid[2] === xIsPlaying) ||
    (gameGrid[3] === xIsPlaying &&
      gameGrid[4] === xIsPlaying &&
      gameGrid[5] === xIsPlaying) ||
    (gameGrid[6] === xIsPlaying &&
      gameGrid[7] === xIsPlaying &&
      gameGrid[8] === xIsPlaying) ||
    (gameGrid[0] === xIsPlaying &&
      gameGrid[3] === xIsPlaying &&
      gameGrid[6] === xIsPlaying) ||
    (gameGrid[1] === xIsPlaying &&
      gameGrid[4] === xIsPlaying &&
      gameGrid[7] === xIsPlaying) ||
    (gameGrid[2] === xIsPlaying &&
      gameGrid[5] === xIsPlaying &&
      gameGrid[8] === xIsPlaying) ||
    (gameGrid[0] === xIsPlaying &&
      gameGrid[4] === xIsPlaying &&
      gameGrid[8] === xIsPlaying) ||
    (gameGrid[2] === xIsPlaying &&
      gameGrid[4] === xIsPlaying &&
      gameGrid[6] === xIsPlaying)
  ) {
    // text under the grid
    document.getElementById("winner").innerHTML =
      "The winner is: " + whoWins(xIsPlaying);
    // dialog box when somebody wins
    window.alert(whoWins(xIsPlaying) + " has won!");
    // empty the text under the grid
    document.getElementById("winner").innerHTML = "";
    // set that the X player is playing
    xIsPlaying = true;
    // empty the helper gameGrid
    gameGrid = [];
    
    buttons.forEach((item) => {
      item.addEventListener("click", insertSymbol);
      item.innerHTML = "";
    });
    endGame = false;
    return true;

  
  } else if (gameGrid.length == 9) {
    checkEmptyCells();
    if(endGame){
      document.getElementById("winner").innerHTML = "Cat game!";
      // dialog box when somebody wins
      window.alert("Cat game!");
      // empty the text under the grid
      document.getElementById("winner").innerHTML = "";
      // set that the X player is playing
      xIsPlaying = true;
      // empty the helper gameGrid
      gameGrid = [];
      buttons.forEach((item) => {
        item.addEventListener("click", insertSymbol);
        item.innerHTML = "";
      });
      endGame = false;
      return true;
    }

    
  }
  

  console.log(gameGrid);
  return false;
};

// write the symbol X or O and check if somebody wins
const insertSymbol = (e) => {
  targetButton = e.target;

  targetButton.removeEventListener("click", insertSymbol);
  if (xIsPlaying) {
    targetButton.innerText = "X";
    targetButton.classList.add("font_red");
    gameGrid[targetButton.id] = xIsPlaying;
    if (checkWinner()) {
      return;
    }

    xIsPlaying = false;
  } else {
    targetButton.innerText = "O";
    targetButton.classList.remove("font_red");
    gameGrid[targetButton.id] = xIsPlaying;
    if (checkWinner()) {
      return;
    }

    xIsPlaying = true;
  }
};

// add eventListener to all buttons
buttons.forEach((item) => {
  item.addEventListener("click", insertSymbol);
});
