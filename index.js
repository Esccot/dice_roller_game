var diceImages = [
  "./assests/dice-six-faces-one.svg",
  "./assests/dice-six-faces-two.svg",
  "./assests/dice-six-faces-three.svg",
  "./assests/dice-six-faces-four.svg",
  "./assests/dice-six-faces-five.svg",
  "./assests/dice-six-faces-six.svg",
];

var leftDice = document.querySelector("#leftDice");
var btn = document.querySelector("#Btn");
btn.addEventListener("click", function () {
  leftDice.classList = "roll";
  rightDice.classList = "roll";

  leftDice.classList.remove("roll");
  rightDice.classList.remove("roll");

  void leftDice.offsetWidth;
  void rightDice.offsetWidth;

  leftDice.classList.add("roll");
  rightDice.classList.add("roll");

  text.innerText = "";

  var bankaiSound = new Audio("./assests/bankai-senbonzakura.mp3");
  var rasenganSound = new Audio("./assests/naruto_rasengan.mp3")

  function winnerSound(randomDice1, randomDice2) {
    
    if (randomDice1 > randomDice2) {
      bankaiSound.currentTime = 0;
      bankaiSound.play();
    }

    else if(randomDice2 > randomDice1){
      rasenganSound.currentTime = 0;
      rasenganSound.play();
    }

    else{
      return;
    }
  }

  var rollInterval = setInterval(function () {
    var randomDice1 = Math.floor(Math.random() * 6);
    leftDice.src = diceImages[randomDice1];

    var randomDice2 = Math.floor(Math.random() * 6);
    rightDice.src = diceImages[randomDice2];
  }, 300);

  setTimeout(function () {
    clearInterval(rollInterval);
    
    var randomDice1 = Math.floor(Math.random() * 6);
    leftDice.src = diceImages[randomDice1];

    var randomDice2 = Math.floor(Math.random() * 6);
    rightDice.src = diceImages[randomDice2];
    if (randomDice1 > randomDice2) {
      text.className = "left-win";
      text.innerHTML =
        'left dice wins <img src="./assests/fighter svg.svg" class="winner-icon">';
    } else if (randomDice2 > randomDice1) {
      text.className = "right-win";
      text.innerHTML =
        'right dice wins  <img src="./assests/ninja svg.svg" class="winner-icon">';
    } else {
      text.className = "draw";
      text.innerHTML = "draw🏳️ ";
    }

    winnerSound(randomDice1, randomDice2);

    rollSound.pause();
    rollSound.currentTime = 0;
  }, 2000);
});

var rightDice = document.querySelector("#rightDice");

var text = document.querySelector("#text");
