function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3);
    switch (randomNum) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;


    }
}

function getPlayerChoice(userInput){
    userInput = userInput.trim().toLowerCase();
    console.log(userInput)
    if(userInput !== "rock" && userInput !== "paper" && userInput !== "scissors"){
        console.log("wrong input please try again");
        return getPlayerChoice();
    }
    else{
         return userInput;
    }
}

let humanScore = 0;
let computerScore = 0;


function playRound(buttonChoice, computerChoice = getComputerChoice()) {
    
    let playerChoice = getPlayerChoice(buttonChoice);

    if(playerChoice === "rock" && computerChoice === "scissors") {
        results.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        humanScore++;
        playerScore.textContent = "Player: " + humanScore;
        
    }
    else if (playerChoice === "rock" && computerChoice === "paper"){
            results.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
            computerScore ++;
            compScore.textContent = "Computer: " + computerScore;
        }
    
    else if(playerChoice === "scissors" && computerChoice === "paper") {
        results.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        humanScore++;
        playerScore.textContent = "Player: " + humanScore;
    }
    else if(playerChoice === "scissors" && computerChoice === "rock"){
            results.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
            computerScore ++;
            compScore.textContent = "Computer: " + computerScore;
        }
    
    else if(playerChoice === "paper" && computerChoice === "rock") {
        results.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        humanScore++;
        playerScore.textContent = "Player: " + humanScore;
    }
    else if(playerChoice === "paper" && computerChoice === "scissors"){
            results.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
            computerScore ++;
            compScore.textContent = "Computer: " + computerScore;
        }
    
    else{
        results.textContent = `It's a tie! You chose ${playerChoice} and the computer chose ${computerChoice}`;
    }

    if(humanScore === 5) {
        alert("You have won!");
        humanScore = 0;
        computerScore = 0;
    }
    else if(computerScore === 5) {
        alert ("The computer has won! You lose!")
        humanScore = 0;
        computerScore = 0;
    }
}

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

const body = document.querySelector("body");

rock.classList.add("rockbtn");
paper.classList.add("paperbtn");
scissors.classList.add("scissorsbtn");

rock.textContent = "rock";
paper.textContent = "paper";
scissors.textContent = "scissors";

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));

body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);

const results = document.createElement("div");
results.classList.add("result");

body.appendChild(results);

const score = document.createElement("div");
score.classList.add("scores");

body.appendChild(score);

const playerScore = document.createElement("h1");
const compScore = document.createElement("h1");

playerScore.classList.add("pScore");
compScore.classList.add("cScore");

playerScore.textContent = "Player: " + humanScore;
compScore.textContent = "Computer: " + computerScore;

score.appendChild(playerScore);
score.appendChild(compScore);





