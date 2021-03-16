/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase()
    }
    /**
     * Display Phrase on game board
     */
    addPhraseToDisplay() {
        const divItems = document.querySelector('#phrase ul');
        let phrase = this.phrase.split('');
        phrase.forEach(char => {
            let listItems = document.createElement('li');
            if (char === ' ') {
                listItems.innerHTML = `<li class="space"> </li>`
            } else {
                listItems.innerHTML = `<li class="hide letter ${char}">${char}</li>`
                 
            }
            divItems.appendChild(listItems)
        })

    }
    
    /**
     * checks if passed letter is in phrase
     * @paran(string letter - letter to check 
     */
    checkLetter(letter) {
            if(this.phrase.includes(letter)){
                return true 
            } else{
                return false
            }
        
    }
    /**
     * Displays passed letter on screen after a match is found 
     * @param (string) letter - letter to display
     */
    showMatchedLetter(letter) {
        const hiddenLetter = this.phrase.split('')
        const phraseList = document.querySelector('#phrase li')
        const checkedLetter = letter
        hiddenLetter.forEach(letter => {
            if(phraseList.textContent === checkedLetter){
            phraseList.classList.add('show')
            phraseList.classList.remove('hide')
            }

        })
    }
    
}