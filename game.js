function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3) +1;
    let choice;
    if(randomNumber === 1){
        choice = "Rock";
        return choice;
    } else if (randomNumber === 2){
        choice = "Paper";
        return choice;
    } else{
        return "Scissors"
    }

}

console.log(getComputerChoice());
