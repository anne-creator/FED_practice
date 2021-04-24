let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// const generateTarget = () => Math.floow(Math.random() * 10);
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, randomInt) {
    if (Math.abs(humanGuess - randomInt) <= Math.abs(computerGuess - randomInt)) {
        return true;
    }
    else {
        return false;
    }
}

function updateScore(winner) {
    switch (winner) {
        case 'human':
            humanScore++;
            break;
        case 'computer':
            computerScore++;
            break;

    }
}

function advanceRound() {
    currentRoundNumber++;
}
