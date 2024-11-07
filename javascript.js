function getComputerChoice(){
    const randomNum = Math.random();
    if (randomNum < 0.33){
        return "rock";
    } else if (randomNum < 0.66){
        return "scissor";
    } else {
        return "paper";
    }
}
 function getHumanChoice(){
    let choice = prompt("Choose rock, paper or scissor");
    return choice.toLowerCase();
 }

let humanScore = 0
let computerScore = 0
function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
    console.log(`It's a tie! Both chose ${computerChoice}.`)
     } else if ((humanChoice === "rock" && computerChoice === "scissor") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissor" && computerChoice === "paper")){
        console.log(`You win ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`You win ${computerChoice} beats ${humanChoice}.`);
        computerScore++;

    }
}
function playGame(){
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`You win the game. Final score: ${humanScore} to ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer wins the game. Final score: ${computerScore} to ${humanScore}`);
    } else {
        console.log(`The game is a tie. Final score: ${humanScore} to ${computerScore}`);
    }


}

playGame();