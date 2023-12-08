const playerFormContainer = document.getElementById("playerFormContainer");

const player1UserType = document.getElementById("player1UserType");
const player1CounterType = document.getElementById("player1CounterType");

const player2UserType = document.getElementById("player2UserType");
const player2CounterType = document.getElementById("player2CounterType");

const playerSubmit = document.getElementById("submit");

const gameContainer = document.getElementById("gameContainer");

let turn = 0;

let newComputerItem;

let generateComputerChoices = () => {
  let computerChoice = Math.floor(Math.random() * 9 + 1);
  newComputerItem = `square${computerChoice}`;
};

let pushComputerChoices = () => {
  if (
    !player1.playerChoices.includes(newComputerItem) &&
    player1.userType === "computer"
  ) {
    player1.playerChoices.push(newComputerItem);
    console.log("Computer Player Choices:", player1.playerChoices);
  } else {
    generateComputerChoices();
  }

  if (
    !player2.playerChoices.includes(newComputerItem) &&
    player2.userType === "computer"
  ) {
    player2.playerChoices.push(newComputerItem);
    console.log("Computer Player Choices:", player2.playerChoices);
  } else {
    generateComputerChoices();
  }
};

const gameBoardObject = {
  gameBoardArray: [
    { name: "square1", clicked: false },
    { name: "square2", clicked: false },
    { name: "square3", clicked: false },
    { name: "square4", clicked: false },
    { name: "square5", clicked: false },
    { name: "square6", clicked: false },
    { name: "square7", clicked: false },
    { name: "square8", clicked: false },
    { name: "square9", clicked: false },
  ],
};

const winningCombinationsObject = {
  winningCombinations: [
    ["square1", "square2", "square3"],
    ["square4", "square5", "square6"],
    ["square7", "square8", "square9"],
    ["square3", "square5", "square7"],
    ["square1", "square5", "square9"],
    ["square1", "square4", "square7"],
    ["square3", "square6", "square9"],
    ["square2", "square5", "square8"],
  ],
};

function Player(userType, counterType, playerChoices, score) {
  this.userType = userType;
  this.counterType = counterType;
  this.playerChoices = [];
  this.score = score;
}

let player1 = new Player();
let player2 = new Player();

let addPlayerSettings = (e) => {
  e.preventDefault();
  player1 = {
    userType: player1UserType.value,
    counterType: player1CounterType.value,
    turn: true,
    playerChoices: [],
    score: 0,
  };

  player2 = {
    userType: player2UserType.value,
    counterType: player2CounterType.value,
    turn: false,
    playerChoices: [],
    score: 0,
  };
  playGame();
  console.log(player1, player2);
};

playerSubmit.addEventListener("click", addPlayerSettings);

let resetPlayerChoices = () => {
  player1.playerChoices = [];
  player2.playerChoices = [];
  console.log("player1 playerChoices:", player1.playerChoices);
  console.log("player2 playerChoices:", player2.playerChoices);
};

let checkWin = () => {
  winningCombinationsObject.winningCombinations.forEach((combinations, i) => {
    if (
      player1.playerChoices.includes(combinations[0]) &&
      player1.playerChoices.includes(combinations[1]) &&
      player1.playerChoices.includes(combinations[2])
    ) {
      {
        alert("Player 1 wins");
        player1.score++;
        console.log("player1: ", player1.score);
        resetPlayerChoices();
      }
    }
    if (
      player2.playerChoices.includes(combinations[0]) &&
      player2.playerChoices.includes(combinations[1]) &&
      player2.playerChoices.includes(combinations[2])
    ) {
      {
        alert("Player 2 wins");
        player2.score++;
        console.log("player2: ", player2.score);
        resetPlayerChoices();
      }
    }
  });

  console.log(winningCombinationsObject.winningCombinations.win1);
};

const addItemsToGameBoard = () => {
  player1.playerChoices.forEach((choice) => {
    let chosenDiv = document.getElementById(choice);
    chosenDiv.innerHTML = player1.counterType;
  });

  player2.playerChoices.forEach((choice) => {
    let chosenDiv = document.getElementById(choice);
    chosenDiv.innerHTML = player2.counterType;
  });

  checkWin();
};

const checkTurn = (clickedSquare) => {
  if (player1.userType === "player" && player2.userType === "player")
    if (turn % 2 === 0) {
      player1.turn = false;
      player2.turn = true;
      player2.playerChoices.push(clickedSquare);
      console.log("player2", player2.playerChoices);
    } else {
      player1.turn = true;
      player2.turn = false;
      player1.playerChoices.push(clickedSquare);
      console.log("player1", player1.playerChoices);
    }

  if (player1.userType === "computer") {
    player2.playerChoices.push(clickedSquare);
    console.log("player2", player2.playerChoices);

    pushComputerChoices();
  }
  if (player2.userType === "computer") {
    player1.playerChoices.push(clickedSquare);
    console.log("player1", player1.playerChoices);
    pushComputerChoices();
    player1.playerChoices.forEach((item) => {
      if (player2.playerChoices.includes(item)) {
        let index = player2.indexOf(item);
        player2.playerChoices.splice(index, 1);
        pushComputerChoices();
      }
    });
  }
  addItemsToGameBoard();
};

const createEventListener = (e) => {
  document.querySelectorAll(".gameDiv").forEach((square) =>
    square.addEventListener("click", (event) => {
      clickedSquare = square.getAttribute("id");
      console.log(clickedSquare);
      turn++;
      console.log(`turn: ${turn}`);
      gameBoardObject.gameBoardArray.clicked = true;
      checkTurn(clickedSquare);

      if ((gameBoardObject.gameBoardArray.clicked = true)) {
        square.style.pointerEvents = "none";
        console.log("pointer event set to none");
      }
    })
  );
};

const createGameSquares = () => {
  gameBoardObject.gameBoardArray.forEach((arrayItem) => {
    let div = document.createElement("div");
    div.id = arrayItem.name;
    div.className = `gameDiv ${arrayItem.name}`;
    gameContainer.appendChild(div);
  });
};

let playGame = () => {
  playerFormContainer.style.visibility = "hidden";
  gameContainer.style.visibility = "visible";
  createGameSquares();
  createEventListener();
};

console.log(turn);
