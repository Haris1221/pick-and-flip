let cards = document.querySelectorAll('.ind-cards')
let backs = document.querySelectorAll('.back')




let hasflipped = false // to check if the card has been flipped before or not.
let firstImage, secondImage // the first card and second card clicked.
let startButton = document.querySelector('#startButton')
let rightGuesses = 0 // keeps track of how many identical cards you got right.
let lockBoard = false // locks the board so you cant click on any other card when they are not matched.

// this function is going to change the class of the clicked card from 'card' to 'card-flip'.
function cardFlip (e) {
    if(lockBoard) return;
    this.classList.add('flip')
    e.preventDefault()

    // this checks the first click as to whether it has been clicked before or not
    if(!hasflipped){
        hasflipped = true
        firstImage = this
    // this checks for the second click
    } else {
        hasflipped = false
        secondImage = this
        cardMatch()
    }
    
}


function cardMatch() {
    if(firstImage.dataset.cards === secondImage.dataset.cards){
        console.log('this is card one',firstImage.dataset.cards)
        console.log('this is card two',secondImage.dataset.cards)
        // if the two images that were clicked are the same
        twoMatched()
    } else {
        twoUnmatched()
    }
}

function twoMatched () {
    firstImage.removeEventListener('click', cardFlip)
    secondImage.removeEventListener('click', cardFlip)
    rightGuesses++
    if(rightGuesses === 8) {
        document.querySelector('h1').innerText = 'You Won'
    }
}

function twoUnmatched () {
    lockBoard = true
    console.log('this is card one',firstImage.dataset.cards)
    console.log('this is card two',secondImage.dataset.cards)
    setTimeout(() => {
        firstImage.classList.remove('flip')
        secondImage.classList.remove('flip')
        lockBoard = false
    }, 1000);
    
}

// timer function was a refernce from a friend in my pod (Habib)
function startTimer(duration, display) {
var timer = duration, minutes, seconds;
setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;
    
    
    if (--timer < 0) {
        document.querySelector('#timerBox').innerText="00:00";
        document.querySelector('h1').innerText = 'You Lost'
    } 
}, 1000);
}
var oneMinute = 90
display = document.querySelector('#timerBox');

cards.forEach(card => {
    card.classList.toggle('flip')
})    

startButton.addEventListener('click', function() {

// this loops throgh each individual clickable card and adds a click event listener for the card to flip if it has the 'card-flip' class.
    cards.forEach(card => {
        card.addEventListener('click', cardFlip)
        card.classList.toggle('flip')
    })    
    startTimer(oneMinute, display)
})