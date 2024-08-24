function getComputerChoice(){
    //This gets a random number between 1 and 3
    const randomN = Math.floor((Math.random() * 3) + 1)
    let compChoice = "";

    switch(randomN){
        case 1:
            compChoice = "ROCK"
            break
        case 2:
            compChoice = "PAPER"
            break
        case 3:
            compChoice =  "SCISSORS"
            break
        default:
            "Invalid Option"
    }

    return compChoice;
}

function getPleyerChoice(){
    let playerChoice = prompt("Rock, Paper or Scissors?");

    return playerChoice.toUpperCase()
}






function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    
    function playRound(humanChoice, computerChoice){
        
        if(humanChoice == "ROCK" && computerChoice == "PAPER"){
            ++computerScore;
    
            console.log(`You Loose, ${computerChoice} beats ${humanChoice}`);
        }else if(humanChoice == "PAPER" && computerChoice == "ROCK"){
            ++humanScore
    
            console.log(`You Win, ${humanChoice} beats ${computerChoice}`);
        }else if(humanChoice == "PAPER" && computerChoice == "SCISSORS"){
            ++computerScore
    
            console.log(`You Loose, ${computerChoice} beats ${humanChoice}`);
        }else if(humanChoice == "SCISSORS" && computerChoice == "PAPAER"){
            ++humanScore
    
            console.log(`You Win, ${humanChoice} beats ${computerChoice}`);
        }else if(humanChoice == "SCISSORS" && computerChoice == "ROCK"){
            ++computerScore
    
            console.log(`You Loose, ${computerChoice} beats ${humanChoice}`);
        }else if(humanChoice == "ROCK" && computerChoice == "SCISSORS"){
            ++humanScore
    
            console.log(`You Win, ${humanChoice} beats ${computerChoice}`);
        }else if(humanChoice == computerChoice){
            console.log(`It is a draw! ${humanChoice} is the same as ${computerChoice}`)
        }
        


    
        
    }
    
    
    

    for(i = 0; i< 5; ++i){
        const humanSelection = getPleyerChoice();
        const computerSelection = getComputerChoice()

        playRound(humanSelection,computerSelection);

    }

    if(humanScore > computerScore){
        console.log(`Player wins with ${humanScore} points`)
    }else if(computerScore > humanScore){
        console.log(`Computer wins with ${computerScore} points`)
    }else{
        console.log(`It is a draw: Player ${humanScore} points, Computer: ${computerScore} points.`)
    }
}

playGame()