let player1UserType = document.getElementById("player1UserType");
let player1Submit = document.getElementById("player1Submit");

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

let addItemToTheThing = (e) => {
  e.preventDefault();
  console.log(player1UserType.value);
};

player1Submit.addEventListener("click", addItemToTheThing);

/*
const player1 = {
  userType: Player1Form.userType.value,
  counterType,
  playerChoices,
  score,
};

const player2 = {
  userType: "",
  counterType,
  playerChoices,
  score,
};

function addToPlayer1(form) {
  player1=userType.form.userType.
}*/
