let player = {
    name: "nnn",
    chips: 300
}

let sum = 0
let cards = []
let hasBlackjack = false
let isAlive = false
let message = ""



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRndomCard(){
     let randomnumber = Math.floor(Math.random()* 13) + 1
     if( randomnumber > 10){
        return 10
     }
     else if (randomnumber===1){
        return 11
     }
     else return  randomnumber 
}

function startGame(){
    isAlive = true
    let firstCard =  getRndomCard()
    let secondcard =  getRndomCard()
    sum = firstCard+secondcard
    cards = [firstCard, secondcard]
    renderGame()
}

let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function renderGame(){
    cardsEl.textContent = "Cards: " 
    for(let i=0; i<cards.length; i++){
    cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
if (sum<=20){
    message = "Do you want to draw a new card?"
}
else if(sum===21){
    message = "Wohoo! you've got Blackjack!"
    hasBlackjack = true
}
else{
    message = "You are out of the game!"
    isAlive = false
}
messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackjack === false){
        let card =  getRndomCard()
        cards.push(card)
        sum+=card
        renderGame()

    }
    
}