let cards = document.querySelectorAll('.cards')
// let v = ["url('images/basketball.jpeg')","url('images/american football.jpeg')","url('images/baseball.jpeg')","url('images/soccer.jpeg')","url('images/volleyball.jpeg')","url('images/tennis.jpeg')","url('images/golf.jpeg')","url('images/handball.jpeg')","url('images/basketball.jpeg')","url('images/american football.jpeg')","url('images/baseball.jpeg')","url('images/soccer.jpeg')","url('images/volleyball.jpeg')","url('images/tennis.jpeg')","url('images/golf.jpeg')","url('images/handball.jpeg')" ]
let objects = {
    americalfootball: '1',
    baseball: '2',
    basketball: '3',
    golf: 'hello',
    handball: '4',
    soccer: '5',
    tennis: '6',
    volleyball: '7'
}



let hasflipped = false
let firstImage, secondImage

// cards.forEach((elem, ind) => {
//     elem.style.backgroundImage = v[ind]
//     elem.style.backgroundSize = '80px 110px'
// })




// this function is going to change the class of the clicked card from 'card' to 'card-flip'.
function cardFlip (e) {
    e.preventDefault()
    this.classList.toggle('flip')
    // this.style.backgroundImage = "url('images/tennis.jpeg')"


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
    // let flipped = document.querySelector('.cards.flip')
    card.addEventListener('click', cardFlip)
})
