/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



let game;
let startGameBtn = document.querySelector('#btn__reset')
startGameBtn.addEventListener('click', () => {
    game = new Game()
    game.startGame()
})

