let cards = document.querySelectorAll('.cards')
// cards.forEach(card => {
//     card.style.backgroundImage = "https://images.pexels.com/photos/13962287/pexels-photo-13962287.png?auto=compress&cs=tinysrgb&w=300&lazy=load"
// })


let objects ={
    "american-football": "url('images/american-football.jpeg')",
    "baseball": "url('images/baseball.jpeg')",
    "basketball": "url('images/basketball.jpeg')",
    "golf" : "url('images/golf.jpeg')",
    "handball": "url('images/handball.jpeg')",
    "soccer": "url('images/soccer.jpeg')",
    "tennis": "url('images/tennis.jpeg')",
    "volleyball": "url('images/volleyball.jpeg')",
    "american-football": "url('images/american-football.jpeg')",
    "baseball": "url('images/baseball.jpeg')",
    "basketball": "url('images/basketball.jpeg')",
    "golf": "url('images/golf.jpeg')",
    "handball": "url('images/handball.jpeg')",
    "soccer": "url('images/soccer.jpeg')",
    "tennis": "url('images/tennis.jpeg')",
    "volleyball": "url('images/volleyball.jpeg')"
}
let hasflipped = false
let firstImage, secondImage
let startButton = document.querySelector('#startButton')
let rightGuesses = 0
let lockBoard = false 

// this function is going to change the class of the clicked card from 'card' to 'card-flip'.
function cardFlip (e) {
    if(lockBoard) return;
    e.preventDefault()
    this.style.removeProperty('backgroundImage')
    this.classList.add('flip')


    // this checks the first click as to whether it has been clicked before or not
    if(!hasflipped){
        hasflipped = true
        firstImage = this
        console.log('this is first image inside card flip',firstImage)
    // this checks for the second click
    } else {
        hasflipped = false
        secondImage = this
        console.log('this is second image inside card flip',secondImage)
        console.log(objects[firstImage.dataset.cards])
        console.log(objects[secondImage.dataset.cards])
        cardMatch()
    }
}


function cardMatch() {
if( secondImage !== undefined){
    if(firstImage.dataset.cards === secondImage.dataset.cards){
        // if the two images that were clicked are the same
        twoMatched()
    } else {
        twoUnmatched()
    }
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
    setTimeout(() => {
        firstImage.classList.remove('flip')
        secondImage.classList.remove('flip')
        lockBoard = false
    }, 1000);
    
}

// this loops throgh each individual clickable card and adds a click event listener for the card to flip if it has the 'card-flip' class.
cards.forEach(card => {
    card.style.backgroundImage = objects[card.dataset.cards]
    card.style.backgroundSize = '80px 110px'
    // if(cards.hasAttribute('.flip')) {
    //     card.style.backgroundImage = objects[card.dataset.cards]
    //     card.style.backgroundSize = '80px 110px'
    // }
    // let flipped = document.querySelector('.cards.flip')
    card.addEventListener('click', cardFlip)
})


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

startButton.addEventListener('click', function() {
    startTimer(oneMinute, display)
})