/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
    /**
     * Creates phrases for use in game
     * @return {array} an array of phrases that could be used in the game
     */
    createPhrases() {
        const arr = []
        const phrasesArr = [
            'Dream as if youll live forever live as if youll die today',
            'I could agree with you but then we both be wrong',
            'Hate comes from intimidation love comes from appreciation',
            'Tough times never last but tough people do',
            'All limitations are selfimposed',
        ];
        phrasesArr.forEach(phrase => {
            let newPhraseArr = new Phrase(phrase)
            arr.push(newPhraseArr)
        })
        return arr;
    }
    /**
     * Selects random phrase from phrases property
     * @return {object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        let randomPhr = this.phrases[Math.floor(Math.random() * this.phrases.length)]
        return randomPhr
    }
    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        let hideScreen = document.getElementById('overlay')
        hideScreen.style.display = 'none'
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay()
    }
    /**
     * Checks for winning move
     * @return {boolean} true if game has been won, false if game wasnt
     */
    checkForWin() {
        const letters = document.querySelectorAll('.hide')
        if (letters.length === 0) {
            return true
        } else {
            return false
        }
    }
    /**
     * Increase the value of the missed property
     * removes a life from the scoreboard
     * checks if player has remaining lives and ends game if player is out
     */
    removeLife() {
        //replace image source
        let tries = document.querySelectorAll('.tries img')
        tries[this.missed].src = 'images/lostHeart.png';
        //increase missed count
        this.missed += 1
        if (this.missed === 5) {
            //call gameOver once out of lifes
            this.gameOver(false)
        }
    }
    /**
     * Resets the game 
     */
    resetGame() {
        let resetLi = document.querySelectorAll('#phrase li');
        resetLi.forEach(listItem => {
            listItem.remove()
        });
        let resetButtons = document.querySelectorAll('#qwerty button')
        resetButtons.forEach(button => {
            button.disabled = false;
            button.classList.remove('chosen');
            button.classList.remove('wrong');
        })
        let tries = document.querySelectorAll('.tries img')
        tries.forEach(reset => {
            reset.src = 'images/liveHeart.png'
        })
    }
    /**
     * displays game over message
     * @param {boolean} gameWon - whether or not the user won the game
     */
    gameOver(gameWon) {
        let background = document.getElementById('overlay');
        background.style.display = 'block'
        let h1Display = document.querySelector('#overlay h1')
        if (!gameWon) {
            background.classList.add('lose');
            h1Display.textContent = `Sorry, better luck next time!`;
            this.resetGame()
        } else {
            background.classList.add('win');
            h1Display.textContent = `Great Job`;
            this.resetGame()
        }

        //reseting the game

    }
    /**
     *Handles onscreen keyboard button clicks 
     * @param {HTMLButtonElement} button - the clicked button element
     */
    handleInteraction(button) {
        let letter = button.innerText
        let guess = this.activePhrase.checkLetter(letter)
        if (guess) {
            button.disabled = true
            button.classList.add('chosen')
            this.activePhrase.showMatchedLetter(letter);
            if (this.checkForWin()) {
                this.gameOver(true)
            }
        } else {
            button.disabled = true
            button.classList.add('wrong')
            this.removeLife()
        }
    }

}