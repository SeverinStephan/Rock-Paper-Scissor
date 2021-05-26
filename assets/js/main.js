// CHOOSE ROUND

let currentRound = document.getElementById("currentround")
let maxRound = document.getElementById("maxround")

const round5 = document.getElementById("radio5")
const round10 = document.getElementById("radio10")
const round15 = document.getElementById("radio15")
const round20 = document.getElementById("radio20")

const allRounds = document.getElementById("allrounds")

const roundsBox = document.getElementById("roundsbox")

const gameFinish = document.getElementById("finish")

let currenRoundStart = 0

function choose() {

    let maxRoundInner
    if (round5.checked) {
        maxRoundInner = round5.value
        roundsBox.style.display = "none"
        allRounds.style.display = "block"

    } else if (round10.checked) {
        maxRoundInner = round10.value
        roundsBox.style.display = "none"
        allRounds.style.display = "block"

    } else if (round15.checked) {
        maxRoundInner = round15.value
        roundsBox.style.display = "none"
        allRounds.style.display = "block"

    } else {
        maxRoundInner = round20.value
        roundsBox.style.display = "none"
        allRounds.style.display = "block"

    }
    maxRound.innerHTML = maxRoundInner
    return maxRoundInner
}

// GAME

let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById("user-score")
const compScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissor_div = document.getElementById("s")



function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

function convertToWord(letter) {
    if (letter === "r") return "Rock"
    if (letter === "p") return "Paper"
    return "Scissors"

}

function win(userChoice, computerChoice) {
    userScore++
    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = computerScore
    const smallUserWord = "user".fontsize(3).sub()
    const smallCompWord = "comp".fontsize(3).sub()
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. YOU WIN!`
}

function lose(userChoice, computerChoice) {
    computerScore++
    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = computerScore
    const smallUserWord = "user".fontsize(3).sub()
    const smallCompWord = "comp".fontsize(3).sub()
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} loses to${convertToWord(computerChoice)}${smallCompWord}. YOU LOST...`
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub()
    const smallCompWord = "comp".fontsize(3).sub()
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}.  It´s a DRAW!`
}


function game(userChoice) {
    currentRound.innerHTML = currenRoundStart++
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice)
            break
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice)
            break
    }

}


function main() {
    rock_div.addEventListener('click', function () {
        game("r")
    })

    paper_div.addEventListener('click', function () {
        game("p")
    })

    scissor_div.addEventListener('click', function () {
        game("s")
    })
}

main()

// NEW GAME

function reset() {
    window.location.reload();
}