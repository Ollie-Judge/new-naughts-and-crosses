const player1UserType = document.getElementById("player1UserType");
const player1CounterType = document.getElementById("player1CounterType");

const player2UserType = document.getElementById("player2UserType");
const player2CounterType = document.getElementById("player2CounterType");

const playerSubmit = document.getElementById("submit");

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
    // playerChoices,
    // score,
  };

  const player2 = {
    userType: player2UserType.value,
    counterType: player2CounterType.value,
    // playerChoices,
    // score,
  };
  console.log(player1, player2);
};

playerSubmit.addEventListener("click", addPlayerSettings);

/*


function addToPlayer1(form) {
  player1=userType.form.userType.
}*/
