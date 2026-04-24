// let firstCard = getRandomCard()
// let secondCard = getRandomCard()

//Using Arrays - Create a new array - cards - that contians firstCard and secondCard
//let cards = [firstCard, secondCard]
//let sum = firstCard + secondCard

let player = {
    name : "Sindhuja",
    chips : 200
}

let cards = []
let sum = 0
console.log(sum)
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el")


function getRandomCard() {
    let RandomNumber = Math.floor(Math.random() * 13) + 1
    if (RandomNumber > 10) {
        return 10
    } else if (RandomNumber === 1) {
        return 11
    } else {
        return RandomNumber
    }

}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    //cardsEl.textContent = "Cards:" + firstCard + " " + secondCard
    cardsEl.textContent = "Cards:" + cards
    // for(let i = 0; i < cards.length; i++){
    //     cardsEl.textContent += cards[i] + " " + card
    // }

    sumEl.textContent = "Sum:" + sum
    playerEl.textContent = player.name + ": $" + player.chips
    if (sum < 21) {
        message = "Do you want to draw a new card?"
        //console.log("Do you want to draw a new card?")
        isAlive = true
    } else if (sum === 21) {
        message = "Wohoo! You've got the black jack!"
        //console.log("Wohoo! You've got the black jack!")
        hasBlackJack = true
        isAlive = true
    } else {
        message = "You are out of the game!"
        //console.log("you are out of the game!")
        isAlive = false
    }
    messageEl.innerText = message

    console.log("Message: " + message)
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        console.log("new card picked")
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()

    }

}













