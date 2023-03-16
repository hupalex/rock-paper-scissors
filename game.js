let playerScore = 0;
let computerScore = 0;

//This function randomly makes the computer choose Rock/Paper/Scissors
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3) +1;

    if(randomNumber === 1){
        return "rock";
    } else if (randomNumber === 2){
        return "paper";
    } else{
        return "scissors";
    }
}

function playGame(playerSelection, computerSelection){
    playerSelection = prompt("What do you select? Rock, Paper or Scissors? Choose wisely...","" );
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    
    // If player wins, gives a message and a score, otherwise its a tie or a point to the computer
    if (playerSelection.toLowerCase() === computerSelection){
        console.log(playerScore);
        console.log(computerScore);
        return "It is a tie...";
    }else if (playerSelection.toLowerCase() ==="rock" && computerSelection === "scissors"){
        playerScore++;
        console.log(playerScore);
        console.log(computerScore);
        return "You won, Rock beats Scissors!";
    } else if (playerSelection.toLowerCase() ==="paper" && computerSelection === "rock"){
        playerScore++;
        console.log(playerScore);
        console.log(computerScore);
        return "You won, Paper beats Rock!";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        playerScore++;
        console.log(playerScore);
        console.log(computerScore);
        return "You won, Scissors beat Paper!";
    } else if (playerSelection.toLowerCase() === ""){
        return "Come ooon, choose something!";
    } else{
        computerScore++;
        console.log(playerScore);
        console.log(computerScore);
        return "You lost, hahaaa!";
        
    } 
    

}

// Best of five, at the end of the last round, the function returns the winner side.
function game(){
    for (let i=0; i < 5; i++){
        playGame();
    }
    if(playerScore > computerScore){
        return "Congrats, you have won the game!"
    }else if (playerScore < computerScore){
        return "Meh, you lost the game"
    } else return "It's a tie baby!"
}

console.log(game())


