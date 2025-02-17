const object1 = document.querySelector("#rock");
const object2 = document.querySelector("#scissor");
const object3 = document.querySelector("#paper");
const resultdiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");
const compDiv = document.querySelector("#comp");
const humanDiv = document.querySelector("#human");
const resetButton = document.querySelector("#resetButton");
const gameOver = document.querySelector("#gameOver");
const pgameOver = document.querySelector("#pgameOver");
let humanScore = 0;
let computerScore = 0;
let currentRound = 1;
const totalRounds = 5;


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getHumanChoice(choice) {
    return choice;  
}

function playRound(playerChoice){
    if (currentRound > totalRounds){
        return;
    }
    const computerChoice = getComputerChoice();
    playerChoice = playerChoice.toLowerCase();

    compDiv.textContent = `Computer: ${computerChoice}`;
    humanDiv.textContent = `Human: ${playerChoice}`;

    let message = " ";

    if(playerChoice == computerChoice){
        message = "It's a tie";
    } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")){
        humanScore++;
        message = `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        message = `You lose! ${computerChoice} beats ${playerChoice}`;
    } 

    resultdiv.textContent = message;
    scoreDiv.textContent = `Player: ${humanScore}, Computer: ${computerScore}`

    currentRound++;
    if (currentRound > totalRounds){
        endGame();
    }
}

function endGame(){
    gameOver.style.display = "block";

    object1.disabled = true;
    object2.disabled = true;
    object3.disabled = true;

    let finalMessage = "";
    if (humanScore > computerScore){
        pgameOver.textContent = "Congratulations!";
        finalMessage = "You win!";
    } else if (computerScore > humanScore){
        pgameOver.textContent = "Game Over!";
        finalMessage = "You loose!"
    } else {
        finalMessage = "It is a tie";
    }
    resultdiv.textContent = finalMessage;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    currentRound = 1;

    resultdiv.textContent = ""; // Clear result message
    scoreDiv.textContent = `Player: ${humanScore}, Computer: ${computerScore}`;
    compDiv.textContent = "";
    humanDiv.textContent = "";
    // document.getElementById("rounds").textContent = `Round: ${currentRound} / ${totalRounds}`; // Reset round display

    object1.disabled = false; // Enable buttons
    object2.disabled = false;
    object3.disabled = false;

    gameOver.style.display = "none"; // Hide game over message
}


object1.addEventListener("click", () => playRound("rock"));
object2.addEventListener("click", () => playRound("scissor"));
object3.addEventListener("click", () => playRound("paper"));
resetButton.addEventListener("click", () => resetGame());


