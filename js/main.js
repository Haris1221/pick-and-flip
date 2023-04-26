let cards = document.querySelectorAll('.cards')
// let v = ["url('images/basketball.jpeg')","url('images/american football.jpeg')","url('images/baseball.jpeg')","url('images/soccer.jpeg')","url('images/volleyball.jpeg')","url('images/tennis.jpeg')","url('images/golf.jpeg')","url('images/handball.jpeg')","url('images/basketball.jpeg')","url('images/american football.jpeg')","url('images/baseball.jpeg')","url('images/soccer.jpeg')","url('images/volleyball.jpeg')","url('images/tennis.jpeg')","url('images/golf.jpeg')","url('images/handball.jpeg')" ]
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



// this function is going to change the class of the clicked card from 'card' to 'card-flip'.
function cardFlip (e) {
    e.preventDefault()
    this.style.removeProperty('backgroundImage')
    this.style.backgroundColor = 'red'
    this.classList.toggle('flip')


    // this checks the first click as to whether it has been clicked before or not
    if(!hasflipped){
        hasflipped = true
        firstImage = this
    // this checks for the second click
    } else {
        hasflipped = false
        secondImage = this
        console.log(objects[firstImage.dataset.cards])
        console.log(objects[secondImage.dataset.cards])
    }
        if( secondImage !== undefined){
        if(firstImage.dataset.cards === secondImage.dataset.cards){
            // if the two images that were clicked are the same
            firstImage.removeEventListener('click', cardFlip)
            secondImage.removeEventListener('click', cardFlip)
            console.log('done')
        } else {
            setTimeout(() => {
                firstImage.classList.toggle('flip')
                secondImage.classList.toggle('flip')
            }, 1000);
        }
    }
    }

// this loops throgh each individual clickable card and adds a click event listener for the card to flip if it has the 'card-flip' class.
cards.forEach(card => {
    card.style.backgroundImage = objects[card.dataset.cards]
    card.style.backgroundSize = '80px 110px'
    // let flipped = document.querySelector('.cards.flip')
    card.addEventListener('click', cardFlip)
})

//countdown timer

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
    }
}, 1000);
}

var fiveMinutes = 90
display = document.querySelector('#timerBox');
startTimer(fiveMinutes, display);