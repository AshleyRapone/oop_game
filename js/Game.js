/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 //3

 class Game {
     constructor(missed, phrases, activePhrase) {
       this.missed = missed;
       this.phrases = phrases;
       this.activePhrase = activePhrase;
     }
    
     startGame() {
         // Hides the start screen overlay 
         const gameOverlay = document.getElementById('overlay');
         gameOverlay.style.display = 'none';
         // sets the activePhrase property 
         this.activePhrase = this.getRandomPhrase()
         //add Phrase To the Display()
         const currentPhrase = new Phrase(this.activePhrase);
         currentPhrase.addPhraseToDisplay();
     }
     getRandomPhrase() {
        // console.log(this.phrases);
        const index = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[index]
     }
     handleInteraction(button) {
       const key = button.textContent;
       console.log(key);
        if (this.activePhrase.includes(key)) {
          console.log('true');
          button.classList.add('chosen');
          const currentPhrase = new Phrase(this.activePhrase);
          currentPhrase.showMatchedLetter(key);
          const winner = this.checkForWin();
        } else {
           // button.classList.add(chosen)
        }
         //add wrong CSS class
         // call removeLife()
       // if matched 
         // add the chosen CSS class to the selected letter's keyboard button
         // call the showMatchedLetter()
         // checkForWin() method
         // add win 
       // if won 
         // gameOver()
       // disable button   
     }

     checkForWin() {
        // if all buttons have show then there is a win
        const keyList = document.querySelector('#phrase ul').children;
        let showLetterCount = 0;
        for (let i = 0; i < keyList.length; i++) {
          console.log(keyList[i])
          console.log(keyList[i].classList.contains('show'));
          if (keyList[i].classList.contains('show')) {
               showLetterCount +=1;
            }
        }
        console.log(showLetterCount);
     }
       
 }

 let game = new Game(0, ['hi', 'heck yea', 'no way'], 'he' )
 game.startGame();
 
 //game.startGame()
 //game.getRandomPhrase();
 //game.handleInteraction();

 const keys = document.getElementsByClassName('key');
 for (let i =0; i <keys.length; i++) {
     if (i === 2) {
        game.handleInteraction(keys[i]);
     }
     
     // if matched then handle the interaction
 }
 