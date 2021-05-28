# oop_game
## Phrase Hunter: Guess the Phrase Game

### Features I added:
* The `Phrase` class that contains a `phrase` property and the following methods: 
  * `addPhraseToDisplay()` - adds letter placeholders of the phrase to the display
  * `checkLetter(pickedLetter)` - checks to see if the letter picked by user is in the phrase
  * `showMatchedLetter(matchedLetter)` - displays the letter the user picks if it is in the phrase
* The `Game` class that contains the `missed`, `phrases` and `activePhrase` properties and the following methods:
  * `startGame()` - displays the game-play screen
  * `getRandomPhrase()` - generates a random phrase from the `phrases` property
  * `handleInteraction(button)` - handles actions after the user either clicks a letter on the screen or the keyboard
  * `removeLife()` - removes a life from the scoreboard
  * `checkForWin()` - checks to see if the user selected all the letters in the phrase
  * `gameOver(gameStatus)` - disables the 'keyup' event listener, displays if the user won or lost, and resets the game
  * `resetGame()` - clears the phrase, resets the keys on the keyboard, and replenishes the heart scoreboard

### Instructions:
* Open the index.html file in Google Chrome
* Click 'Start Game' to start the Phrase Hunter game
* The goal of the game is to figure out the phrase by guessing the letters that make up the phrase
* You can either type a letter on the keyboard or click one of the letters on the keyboard that is on screen 
* User should not be able to pick a letter that has already been picked
* Once you click or enter the letter on the keyboard one of two things may happen depending on if you guessed the correct letter
  * If the letter guessed does not match any letters in the phrase, then the letter on the keyboard will turn orange and a heart will be subtracted from the scoreboard
  * If the letter guessed does match any letters in the phrase, then the letter on the keyboard will turn blue and the letter will be revealed on the phrase display
* There are five hearts on the scoreboard, if the player guesses incorrectly 5 times then the user will see the text "Game Over" with a red background
* If the player guesses all of the letters in the phrase correclty, the user will see the text "You Won" with a green background
* If the user clicks the "Play Again" button then the Phrase Hunter game will start again