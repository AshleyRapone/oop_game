/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Defining variables that will be passed to the Game object
const missed = 0;
const phrases = [new Phrase('Winter is coming'), 
                 new Phrase("You know nothing Jon Snow"), 
                 new Phrase("A Lannister always pays his debts"), 
                 new Phrase("Dracarys"), 
                 new Phrase("Hold the door")];
const activePhrase = null;

// This function is used to handle events relating to keyboard keys being pressed
let eventHandler = function(event) {
    // Determines which key was pressed
    let keyPressed = event.key;
    // Loops through keys of the keyboard
    for (let i = 0; i < keys.length; i++) {
        // If the key on the keyboard matches the key that is pressed
        if (keys[i].innerHTML === keyPressed) {
            // If the key has the disabled property, skip
            if (keys[i].disabled) { 
              continue
            } else {
                // Invoke the game interaction for the key that was pressed
                game.handleInteraction(keys[i]);
                }
        }
        }
    } 

const keys = document.getElementsByClassName('key');
const startGameButton = document.getElementById('btn__reset');
// Event listener listens for when the "Start Game" button is pressed
startGameButton.addEventListener('click', () => {
  // New Game object is instantiated 
  game = new Game(missed, phrases, activePhrase);
  game.startGame();
  // Event listener listens for when a key is pressed on the keyboard
  document.addEventListener('keyup', eventHandler);
})

// Look through keys on the keyboard
for (let i = 0; i < keys.length; i++) {
  // Event listener listens for when one of the keys on the screen will be clicked
  keys[i].addEventListener('click', (event) => {
    // Invoke the game interaction for the key that was clicked
    game.handleInteraction(event.target);
  })
}
