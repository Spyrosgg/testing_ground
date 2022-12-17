var humanScore = 0;
var robotScore = 0;
var tieScore = 0;

function humanSelection() {
    let choices = [`rock`, `paper`, `sissors`];
    human = choices[Math.floor(Math.random()*choices.length)];
    return human
}
function robotSelection() {
    let choices = [`rock`, `paper`, `sissors`];
    robot = choices[Math.floor(Math.random()*choices.length)];
    return robot
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection==computerSelection) {
        return tieScore++;
        // return (`it is a tie: robot: ${computerSelection} vs human: ${playerSelection}`)
    } else if (playerSelection == 'rock' && computerSelection=='sissors'){
       return humanScore++;
        // return ('you win, rock beats sissors')
    } else if (playerSelection == 'sissors' && computerSelection=='paper'){
       return humanScore++;
        // return ('you win, sissors beats paper')
    } else if (playerSelection == 'paper' && computerSelection=='rock'){
       return humanScore++;
        // return ('you win, paper beats rock')
    } else{
       return robotScore++;
        // return (`you lose, robot: ${computerSelection} beats human: ${playerSelection}`)
    }
}

function game() {
    let results = [];
    for (let i=0; i<5; i++) {
        let human = humanSelection();
        let robot = robotSelection();
        playRound(human,robot);
    }
    
    console.log(`human = ${humanScore} | robot = ${robotScore} | tie = ${tieScore}`);
  
    if ( humanScore == robotScore){
        whoWon = 3;
    } else if  ((humanScore - robotScore) > 0) {
        whoWon = 1;
    } else {
        whoWon = 2;
    }

    switch(whoWon){
        case 1:
            console.log( `Human superiority wins`);
        break;
        case 2:
            console.log( `Robots will rule`);
        break; 
        case 3:
            console.log( `It's a tie. The fate is unsurtain`);
        break;
    }

} 
game();

// let input = prompt("whats is your play?")

// if (input.toLowerCase() == 'rock') {
//     playerSelection = 'rock';
// } else if (input.toLowerCase() == 'sissors') {
//     playerSelection = 'sissors';
// } else if (input.toLowerCase() == 'paper') {
//     playerSelection = 'paper';
// } else {
//     alert ('not valid input. Choose rock, paper or sissors')
// }
