

let cards = document.querySelectorAll('.cards')
let v = []
function cardFlip () {
    console.log('I was clicked')
    console.log(this)
    this.classList.toggle('flip')
}

cards.forEach(card => {
    card.addEventListener('click', cardFlip)
    v.push()
})

