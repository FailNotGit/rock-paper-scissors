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
        console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if (playerChoice === "rock" && computerChoice === "paper"){
            console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
            computerScore ++;
        }
    
    else if(playerChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if(playerChoice === "scissors" && computerChoice === "rock"){
            console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
            computerScore ++;
        }
    
    else if(playerChoice === "paper" && computerChoice === "rock") {
        console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if(playerChoice === "paper" && computerChoice === "scissors"){
            console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
            computerScore ++;
        }
    
    else{
        console.log(`It's a tie! You chose ${playerChoice} and the computer chose ${computerChoice}`);
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







