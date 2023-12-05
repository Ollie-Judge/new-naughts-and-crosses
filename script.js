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
    "square1",
    "square2",
    "square3",
    "square4",
    "square5",
    "square6",
    "square7",
    "square8",
    "square9",
  ],
};

function Player(userType, counterType, playerChoices, score) {
  this.userType = userType;
  this.counterType = counterType;
  this.playerChoices = [];
  this.score = score;
}

let addPlayerSettings = (e) => {
  e.preventDefault();
  const player1 = {
    userType: player1UserType.value,
    counterType: player1CounterType.value,
    //turn
    // playerChoices,
    // score,
  };

  const player2 = {
    userType: player2UserType.value,
    counterType: player2CounterType.value,
    //turn
    // playerChoices,
    // score,
  };
  playGame();
  console.log(player1, player2);
};

playerSubmit.addEventListener("click", addPlayerSettings);

const createEventListener = () => {
  document.querySelectorAll(".gameDiv").forEach((e) =>
    e.addEventListener("click", (event) => {
      console.log(event.target);
      // removeGameDivEListener(e);
    })
  );
};

let playGame = () => {
  playerFormContainer.style.visibility = "hidden";
  gameContainer.style.visibility = "visible";
  gameBoardObject.gameBoardArray.forEach((item) => {
    let div = document.createElement("div");
    div.id = item;
    div.className = `gameDiv ${item}`;
    gameContainer.appendChild(div);
  });
  createEventListener();
};

// const removeGameDivEListener = () => {
//   e.removeEventListener("click", createEventListener);
// };
console.log(turn);
