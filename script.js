function getComputerChoice() {
  let answer = "";
  let randomNum = Math.round(Math.random() * (3 - 1) + 1);
  if (randomNum === 1) {
    answer = "rock";
  } else if (randomNum === 2) {
    answer = "paper";
  } else {
    answer = "scissors";
  }

  return answer;
}





function getHumanChoice() {
  let answer = prompt("What's your choice? Rock/Paper/Scissors");

  if (
    answer.toLowerCase() === "rock" ||
    answer.toLowerCase() === "paper" ||
    answer.toLowerCase() === "scissors"
  ) {
    return answer;
  }

  return getHumanChoice();
}




function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    let loseMessage =
      "You lose. " + computerChoice + " beats " + humanChoice + ".";
    let winMessage =
      "You win. " + humanChoice + " beats " + computerChoice + ".";
    let tieMessage = "It's a tie. Both chose " + humanChoice;

    if (humanChoice === computerChoice) {
      alert(tieMessage);
      return "tie";
    }

    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      alert(winMessage);
      return "win";
    } else {
      alert(loseMessage);
      return "lose";
    }
  }

  while (humanScore < 5 && computerScore < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    let result = playRound(humanSelection, computerSelection);

    if (result === "win") {
      humanScore++;
    } else if (result === "lose") {
      computerScore++;
    }

    alert(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);
  }

  if (humanScore === 5) {
    alert("Congratulations! You won the game!");
  } else if (computerScore === 5) {
    alert("Game over! The computer won the game.");
  }
}




playGame();
