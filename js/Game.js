/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
     /**
     * Creates phrases for use in game
     * @return {array} an array of phrases that could be used in the game
     */
    createPhrases(){
        const arr = []
        const phrasesArr = [
            'Dream as if you’ll live forever, live as if you’ll die today.',
            'I could agree with you but then we’d both be wrong',
            'Hate comes from intimidation, love comes from appreciation.',
            'Tough times never last but tough people do.',
            'All limitations are self-imposed.',
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
    getRandomPhrase(){
        let randomPhr = this.phrases[Math.floor(Math.random()* this.phrases.length)]
        return randomPhr
    }
    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame(){
        let hideScreen = document.getElementById('overlay')
        hideScreen.style.display = 'none'
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay()
    }
    handleInteraction(){
        
    }
 }


