function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    return getRandomInt(3)
}

function getHumanChoice() {
    let choice = prompt("Rock Paper Scissors!")
    return choice.toLowerCase()
}

function playRound(humanChoice, computerChoice) {
    // 0=Rock;1=Paper;2=Scissors
    var choices = ['rock', 'paper', 'scissors']
    compChoice = choices[computerChoice]
    console.log("Computer : " + compChoice);
    console.log("Human : " + humanChoice);


    if (humanChoice === compChoice) {
        return undefined
    } else if (humanChoice == choices[0] && compChoice == choices[1]) {
        return false
    } else if (humanChoice == choices[0] && compChoice == choices[2]) {
        return true
    } else if (humanChoice == choices[1] && compChoice == choices[0]) {
        return true
    } else if (humanChoice == choices[1] && compChoice == choices[2]) {
        return false
    } else if (humanChoice == choices[2] && compChoice == choices[0]) {
        return false
    } else if (humanChoice == choices[2] && compChoice == choices[1]) {
        return true
    }
}

function playGame() {
    var humanScore = 0
    var computerScore = 0

    for (let i = 0; i < 5; i++) {
        state = playRound(getHumanChoice(), getComputerChoice())


        if (state === undefined) {
            console.log("DRAW!");
        } else if (state === true) {
            humanScore++
        } else {
            computerScore++
        }

        const liveScore = `
        | Live Score |
        Human Score : ${humanScore}
        Computer Score : ${computerScore}
        `
        console.log(liveScore)
    }

    if (humanScore > computerScore) {
        console.log('HUMAN WINS!');
    } else if (humanScore < computerScore) {
        console.log('COMPUTER WINS!');
    } else {
        console.log('GAME DRAW!');
    }
}