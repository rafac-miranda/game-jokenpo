const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

//ENUM:
const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {

    const machineChoices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)
    return machineChoices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log('Você: ' + human + ' Máquina: ' + machine)

    if (human === machine) {
        result.innerHTML = 'Empate!'
    } else if ((human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) || (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER) || (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK)) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Você venceu!'
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'A máquina venceu!'
    }
    if (humanScoreNumber === 10) {
        humanScoreNumber = 0
        machineScoreNumber = 0
        humanScore.innerHTML = humanScoreNumber
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = ''
        alert('Você ganhou o jogo!')
    } else if (machineScoreNumber === 10) {
        humanScoreNumber = 0
        machineScoreNumber = 0
        humanScore.innerHTML = humanScoreNumber
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = ''
        alert('A máquina ganhou o jogo!')
    }
}