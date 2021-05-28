/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(missed, phrases, activePhrase) {
       this.missed = missed;
       this.phrases = phrases;
       this.activePhrase = activePhrase;
     }

     // This function will bring you to the game-play screen and get the phrase ready on the display
     startGame() {
         // Hide the start screen overlay 
         const gameOverlay = document.getElementById('overlay');
         gameOverlay.style.display = 'none';
         // Set the activePhrase property and add to the display
         this.activePhrase = this.getRandomPhrase();
         this.activePhrase.addPhraseToDisplay();
     }

     // This function will get a random phrase
     getRandomPhrase() {
        const index = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[index];
     }

     // This function will handle actions after the user either clicks a letter on the screen or the keyboard
     handleInteraction(button) {
       // disable the key button 
       button.disabled = true;
       const key = button.textContent;
       // If the key letter picked is in the phrase
        if (this.activePhrase.checkLetter(key)) {
          // Add the chosen class to the button element
          button.classList.add('chosen');
          // Display the matched letter
          this.activePhrase.showMatchedLetter(key);
          // Check to see if the user won the game
          const winner = this.checkForWin();
          if (winner) {
            this.gameOver('win');
          }
        } else {
            // Remove wrong class from the button element and remove life
            button.classList.add('wrong');
            this.removeLife();
        }
     }

     // This function will remove a life from the scoreboard
     removeLife() {
       this.missed += 1;
       const scoreboard = document.querySelector('#scoreboard ol').children;
       const heartImage = scoreboard[this.missed - 1].querySelector('img');
       // Replace life heart with a lost heart image
       heartImage.src = 'images/lostHeart.png';
       // If user missed 5 guesses then invoke the gameOver method and pass in 'lose'
       if (this.missed === 5) {
        this.gameOver('lose');
       }
       
     }

     // This function will check to see if the user selected all the letters in the phrase
     checkForWin() {
        const keyList = document.querySelector('#phrase ul').children;
        let showLetterCount = 0;
        let spaceCount = 0;
        // Loop through the list of letters in the phrase
        for (let i = 0; i < keyList.length; i++) {
          // If the class of the list letter is 'show' increase the showLetterCount
          if (keyList[i].classList.contains('show')) {
               showLetterCount +=1;
            } // If the class of the list letter is 'space' increase the spaceCount
            else if (keyList[i].classList.contains('space')) {
                spaceCount += 1;
            }
        }
        // Return true if the letter and space count equals the length of characters in the phrase
        return (showLetterCount + spaceCount) === keyList.length
     }

     // This function will disable the 'keyup' event listener, display if the user won or lost, and reset the game
     gameOver(gameStatus) {
       // Remove keyup event listener 
      document.removeEventListener('keyup', eventHandler);
      const gameOverlay = document.getElementById('overlay');
      // Show the Game Over display
      gameOverlay.style.display = 'block';
      const gameOverMessage = document.getElementById('game-over-message');
      // If user lost display a "Game Over" message; If user won display a "You Won" message
      if (gameStatus == 'lose') {
        gameOverMessage.textContent = 'Game Over';
      } else if (gameStatus === 'win') {
        gameOverMessage.textContent = 'You Won';
      }
      const overlay = document.getElementById('overlay');
      const currentOverlayClass = overlay.className
      // Replace the currentOverlayClass with 'win' or 'lose' depending if the user won or lost respectively
      overlay.classList.replace(currentOverlayClass, gameStatus);
      // Reset the game
      this.resetGame();
     }

     // This function clears the phrase, resets the keys on the keyboard, and replenishes the heart scoreboard
     resetGame() {
      // Clear the phrase list elements
      const keyList = document.querySelector('#phrase ul')
      keyList.innerHTML = '';
      
      //loop through the keys on the keyboard
      const keys = document.getElementsByClassName('key');
      for (let i = 0; i < keys.length; i++) {
        // Add class name of 'key' and enable the key button elements
        keys[i].className = 'key';
        keys[i].disabled = false
      }
      // Change 'Start Game' button to 'Play Again'
      const buttonReset = document.getElementById('btn__reset');
      buttonReset.textContent = 'Play Again';
      const scoreboard = document.querySelector('#scoreboard ol').children;
      // Loop through the hearts on the scoreboard
      for (let i = 0; i < scoreboard.length; i++) {
        // Set to the live heart image
        const heartImage = scoreboard[i].querySelector('img');
        heartImage.src = 'images/liveHeart.png';
      }
     }
 }