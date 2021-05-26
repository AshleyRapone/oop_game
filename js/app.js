/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const missed = 0;
const phrases = ['Winter is coming', "You know nothing Jon Snow", "A Lannister always pays his debts", "Dracarys", "Hold the door"];
const activePhrase = null;

const startGameButton = document.getElementById('btn__reset');
startGameButton.addEventListener('click', () => {
  game = new Game(missed, phrases, activePhrase);
  game.startGame();
})

const keys = document.getElementsByClassName('key');
for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', (event) => {
    game.handleInteraction(event.target);
  })
}
