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

function addScoreToPlayer(){
    let pScore = document.getElementById('playerScore');
    pScore.style.color = 'black';
    pScore.textContent = playerScore;
}

function addScoreToComputer(){
    let cScore = document.getElementById('computerScore');
    cScore.style.color = 'black';
    cScore.textContent = computerScore;
}

function playGame(playerSelection, computerSelection){
    getComputerChoice();
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    let wText = document.getElementById("winnerText");
    wText.style.color = "black";

        
            if (playerSelection === computerSelection){
                console.log(playerScore);
                console.log(computerScore);
                return "It is a tie...";
            }else if ((playerSelection ==="rock" && computerSelection === "scissors")||
                    (playerSelection ==="paper" && computerSelection === "rock")||
                    (playerSelection === "scissors" && computerSelection === "paper")){
                playerScore++;
                addScoreToPlayer();
                addScoreToComputer();
                console.log(playerScore);
                console.log(computerScore);
                if(playerScore===5){
                    wText.textContent="Congrats, you won!";
                }


            } else{
                computerScore++;
                addScoreToPlayer();
                addScoreToComputer();
                console.log(playerScore);
                console.log(computerScore);
                if(computerScore === 5){
                    wText.textContent="You lost the game!";
                }
            }       
    }
    

//choosing a button and start the game.
chooseRock = document.getElementById("rock").addEventListener('click', () =>{ 
    playGame(playerSelection = "rock");
    console.log(playerSelection);
});

choosePaper = document.getElementById("paper").addEventListener('click', () =>{
    playGame(playerSelection = "paper");
    console.log(playerSelection);
});

chooseScissors = document.getElementById("scissors").addEventListener('click', () =>{
    playGame(playerSelection = "scissors");
    console.log(playerSelection);
})







    






