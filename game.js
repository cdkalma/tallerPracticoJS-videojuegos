const canvas = document.querySelector('#game')
const game = canvas.getContext('2d')

window.addEventListener('load', startGame)

function startGame() {
    let canvasSize

    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8
    } else {
        canvasSize = window.innerHeight * 0.8
    } 

    canvas.setAttribute('width', canvasSize)
    canvas.setAttribute('height', canvasSize)

    let elementsSize = canvasSize / 10

    game.font = elementsSize + 'px Verdana' //siempre debe ir antes del fillText
    game.textAlign = 'end'
    for (let i = 1; i <= 10; i++) {
        game.fillText(emojis['X'], elementsSize * i, elementsSize)
    }
}






