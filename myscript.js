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

function getPlayerChoice(){
    let userInput = prompt("Enter rock, paper or scissors").trim().toLowerCase();
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


function playRound(playerChoice = getPlayerChoice(), computerChoice = getComputerChoice()) {

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

function playGame() {
    
    for(let count = 0; count < 5; count++){
        playRound();
    }
    if(humanScore < computerScore){
        console.log("Computer Wins!")
    }
    else {
        console.log("You win!")
    }
}
