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
        const index = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[index].toLowerCase();
     }
     handleInteraction(button) {
       button.disabled = true;
       const key = button.textContent;
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
        this.gameOver('lose');
       }
       
     }

     checkForWin() {
        // if all buttons have show then there is a win
        const keyList = document.querySelector('#phrase ul').children;
        let showLetterCount = 0;
        let spaceCount = 0;
        for (let i = 0; i < keyList.length; i++) {
          if (keyList[i].classList.contains('show')) {
               showLetterCount +=1;
            } else if (keyList[i].classList.contains('space')) {
                spaceCount += 1;
            }
        }
        return (showLetterCount + spaceCount) === keyList.length
     }

     gameOver(gameStatus) {
      const gameOverlay = document.getElementById('overlay');
      gameOverlay.style.display = 'block';
      const gameOverMessage = document.getElementById('game-over-message');
      gameOverMessage.textContent = 'Game Over';
      const overlay = document.getElementById('overlay');
      overlay.classList.replace('start', gameStatus);
      this.resetGame();
      
     }

     resetGame() {
      const keyList = document.querySelector('#phrase ul')
      keyList.innerHTML = '';
      const keys = document.getElementsByClassName('key');
      for (let i = 0; i < keys.length; i++) {
        keys[i].className = 'key';
        keys[i].disabled = false
      }
      const scoreboard = document.querySelector('#scoreboard ol').children;
      for (let i = 0; i < scoreboard.length; i++) {
        const heartImage = scoreboard[i].querySelector('img');
        heartImage.src = 'images/liveHeart.png';
      }
     }
       
 }