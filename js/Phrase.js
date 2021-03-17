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
            let listItems;
            if (char === ' ') {
                listItems = `<li class="space"></li>`
                //.classList.add("space") 
            } else {
                listItems = `<li class="hide letter ${char}" >${char}</li>`
            }
            
            divItems.innerHTML += listItems
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
        const phraseList = document.querySelectorAll('#phrase li')
        phraseList.forEach(listItem => {
            if(listItem.textContent === letter){
            listItem.classList.add('show')
            listItem.classList.remove('hide')
            }

        })
    }
    
}