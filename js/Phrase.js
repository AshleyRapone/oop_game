/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


// 2

 class Phrase {
     constructor(phrase) {
         this.phrase = phrase.toLowerCase();
     }

     addPhraseToDisplay() {
       const phraseContainer = document.getElementById('phrase');
       const splitWords = this.phrase.split('');
       splitWords.forEach( letter => { 
         if (letter === ' ') {
           let spaceListItem = '<li class="space"> </li>'
           phraseContainer.querySelector('ul').insertAdjacentHTML('beforeend', spaceListItem);

         } else {
             let letterListItem = `<li class="hide letter ${ letter }">${ letter }</li>`
             phraseContainer.querySelector('ul').insertAdjacentHTML('beforeend', letterListItem);
         }

        })
     }

     checkLetter(pickedLetter) {
       const splitWords = this.phrase.split('');
       if (splitWords.includes(pickedLetter)) {
        this.showMatchedLetter(pickedLetter);
        return true 
       }
     }

     showMatchedLetter(matchedLetter) {
       const letters = document.getElementsByClassName(matchedLetter);
       for (let i = 0; i < letters.length; i++) {
         letters[i].classList.replace("hide", "show");
       }
       
     } 
 }


 //const phrase = new Phrase('heck yeah');

 //phrase.addPhraseToDisplay();
 //phrase.checkLetter('a');

 