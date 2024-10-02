const body = document.querySelector("body");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const resetButton = document.createElement("button");
const banner = document.createElement("div");
const scoreBanner = document.createElement("div");

body.append(banner)
body.append(scoreBanner)
body.append(rock)
body.append(paper)
body.append(scissors)
body.append(resetButton)



rock.textContent = 'Rock'
paper.textContent = 'Paper'
scissors.textContent = 'Scissors'
resetButton.textContent = "Reset"


banner.className = "banner";
scoreBanner.className = "score-banner";
resetButton.className = "reset-button";



function getComputerChoice() {
  let answer = "";
  let randomNum = Math.round(Math.random() * (3 - 1) + 1);
  if (randomNum === 1) {
    answer = "Rock";
  } else if (randomNum === 2) {
    answer = "Paper";
  } else {
    answer = "Scissors";
  }

  return answer;
}






let playerScore = 0;
let comScore = 0;



function playRound(humanChoice, computerChoice) {
  
  let message = '';

  let loseMessage =
    "+1 Computer. " + computerChoice + " beats " + humanChoice;
  let winMessage =
    "+1 Player. " + humanChoice + " beats " + computerChoice;
  let tieMessage = "It's a tie. Both chose " + humanChoice;

  if (humanChoice === computerChoice) {
    message = tieMessage;
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    message = winMessage;
    playerScore ++;
  } else {
    message = loseMessage;
    comScore++;
  }


  if(humanChoice === 'Reset') {
    message = "Scores reset"
    playerScore = 0;
    comScore = 0;
  }


  if(playerScore < 5 && comScore < 5) {
    banner.innerHTML = message;
    scoreBanner.innerHTML = "Player score: " +playerScore + ' Computer Score: ' + comScore;
  } else if (playerScore === 5) {
    scoreBanner.innerHTML =  "YOU WON";
    banner.innerHTML = winMessage
    playerScore =0;
    comScore = 0;
  } else if (comScore === 5) {
    scoreBanner.innerHTML = "YOU LOSE";
    banner.innerHTML = message;
    playerScore =0;
    comScore = 0;
  }
  

  console.log(message);

}





rock.addEventListener('click', () => playRound("Rock", getComputerChoice()))
paper.addEventListener('click', () => playRound("Paper", getComputerChoice()))
scissors.addEventListener('click', () => playRound("Scissors", getComputerChoice()))
resetButton.addEventListener('click', () => playRound('Reset', getComputerChoice()))

