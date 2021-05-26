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
          button.classList.add('chosen');
          const currentPhrase = new Phrase(this.activePhrase);
          currentPhrase.showMatchedLetter(key);
          const winner = this.checkForWin();
          if (this.checkForWin()) {
            this.gameOver('win');
          }
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
     }
     removeLife() {
       this.missed += 1;
       const scoreboard = document.querySelector('#scoreboard ol').children;
       const heartImage = scoreboard[this.missed - 1].querySelector('img');
       heartImage.src = 'images/lostHeart.png';
       if (this.missed === 5) {
        gameOver('lose');
       }
       
     }

     checkForWin() {
        // if all buttons have show then there is a win
        const keyList = document.querySelector('#phrase ul').children;
        let showLetterCount = 0;
        for (let i = 0; i < keyList.length; i++) {
          if (keyList[i].classList.contains('show')) {
               showLetterCount +=1;
            }
        }
        return showLetterCount === keyList.length
     }

     gameOver(gameStatus) {
      const gameOverlay = document.getElementById('overlay');
      gameOverlay.style.display = 'block';
      const gameOverMessage = document.getElementById('game-over-message');
      gameOverMessage.textContent = 'Game Over';
      const overlay = document.getElementById('overlay');
      overlay.classList.replace('start', gameStatus);
      
     }
       
 }

// let game = new Game(0, ['hi', 'heck yea', 'no way'], 'he' )
// game.startGame();
 
 //game.startGame()
 //game.getRandomPhrase();
 //game.handleInteraction();
 //game.gameOver('lose');
/*
 const keys = document.getElementsByClassName('key');
 for (let i =0; i <keys.length; i++) {
     if (i === 2) {
        game.handleInteraction(keys[i]);
     }
     
     // if matched then handle the interaction
 }
 */