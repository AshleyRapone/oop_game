/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
         this.phrase = phrase.toLowerCase();
     }
     // This function will get the active phrase and add letter placeholders to the display
     addPhraseToDisplay() {
       const phraseContainer = document.getElementById('phrase');
       const splitWords = this.phrase.split('');
       // Loop through each letter of the phrase
       splitWords.forEach( letter => { 
         // If there is a space
         if (letter === ' ') {
           let spaceListItem = '<li class="space"> </li>'
           // Add a space list item to to the phrase container
           phraseContainer.querySelector('ul').insertAdjacentHTML('beforeend', spaceListItem);

         } else {
             let letterListItem = `<li class="hide letter ${ letter }">${ letter }</li>`
             // Add the letter list item to the phrase container 
             phraseContainer.querySelector('ul').insertAdjacentHTML('beforeend', letterListItem);
         }

        })
     }
     // This function takes 
     checkLetter(pickedLetter) {
       const splitWords = this.phrase.split('');
       //if (splitWords.includes(pickedLetter)) {
        //this.showMatchedLetter(pickedLetter);
       // return true 
       return splitWords.includes(pickedLetter);
      // }
     }

     showMatchedLetter(matchedLetter) {
       const letters = document.getElementsByClassName(matchedLetter);
       for (let i = 0; i < letters.length; i++) {
         letters[i].classList.replace("hide", "show");
       }
       
     } 
 }

 