const playerFormContainer = document.getElementById("playerFormContainer");

const player1UserType = document.getElementById("player1UserType");
const player1CounterType = document.getElementById("player1CounterType");

const player2UserType = document.getElementById("player2UserType");
const player2CounterType = document.getElementById("player2CounterType");

const playerSubmit = document.getElementById("submit");

const gameContainer = document.getElementById("gameContainer");

let turn = 0;
// if turn % 2 === 0 then its player 2s turn
// all odds are player 1s turn

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

const addItemsToGameBoard = () => {};

const checkTurn = (clickedSquare) => {
  if (turn % 2 === 0) {
    player1.turn = false;
    player2.turn = true;
    console.log("turn", player1);
    console.log("turn", player2);
    player2.playerChoices.push(clickedSquare);
    console.log("player2", player2.playerChoices);
  } else {
    player1.turn = true;
    player2.turn = false;
    console.log("turn", player1);
    console.log("turn", player2);
    player1.playerChoices.push(clickedSquare);
    console.log("player1", player1.playerChoices);
  }
};

const createEventListener = (e) => {
  document.querySelectorAll(".gameDiv").forEach((square) =>
    square.addEventListener("click", (event) => {
      clickedSquare = square.getAttribute("id");
      console.log(clickedSquare);
      turn++;
      console.log(`turn: ${turn}`);
      let test = (gameBoardObject.gameBoardArray.clicked = true);
      console.log(test);
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
