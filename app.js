
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0;

const reset = document.getElementsByClassName('btn__reset')[0];
const overlay = document.getElementById('overlay');


//Main screen disappears into the game after clicking "start game".

reset.addEventListener('click', () => {
  overlay.style.display = 'none';
});

//Array of phrases for game to choose from.

const phrases = [
'life finds a way',
'gotta catch em all',
'winter is coming',
'swish and flick',
'one ring to rule them all'
];

//Randomly chooses one of the phrases and splits all of the characters into an array of letters

function getRandomPhraseAsArray(arr){
  const getRandomPhrase = arr[Math.floor(Math.random() * arr.length)]; //Targets the array and randomly selects one of the phrases
  const phraseCharacters = getRandomPhrase.split(''); //Splits the phrase that was chosen into separate characters
  return phraseCharacters; //returns the separate characters, stored in the phraseCharacters value
}

//Function to take that new string of characters and display them to the screen

function addPhraseToDisplay(arr){
  for (let i = 0; i < arr.length; i += 1) {
      const listItem = document.createElement('li'); // Cycles through the array of returned characters, turns them into list items.
      listItem.textContent = arr[i]; // Assigns those list items the text content value of the original characters
      const ul = phrase.firstElementChild; // Targets the first child element of the ".phrase" class (which is the ul) and assigns it a value of ul.
      ul.appendChild(listItem); // adds a new child element to that ul, which is the list item we created with the stored phrase letter values

      if(arr[i] !== ' '){
        listItem.classList.add('letter'); // If the new item is not a space (which makes it a letter), give it the styling from ".letter".
      } else {
        listItem.style.width = '2em'; // Or if it's an actual space, widen the space so we can visually tell the different phrase words apart.
      }
  }
}

//Call the function to produce the new string of characters using "phrases" as the parameter, store it into the phraseArray constant. Then call the second function to display that value to the screen
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

//Create a function to check if the letters the player guesses match the ones from the phrase

  function checkLetter(e){
  const letters = document.getElementsByClassName('letter'); //Finds all of the items with the class of letter which we created above. Stores them into the "letter" constant
  for (let i = 0; i < letters.length; i += 1) { // Loops through each letter in the phrase array
    if (e.target[i] === 'letters'){ // if the button clicked matches a letter in the array...
      letters[i].classList.add('show'); // add a class name of ".show" to that letter
      const matchingLetter = document.getElementsByClassName('show'); // Now find all the elements that have the added class name and store it in matchingLetter.
      return matchingLetter;
    } else { // If the button/letter clicked doesn't match one in the phrase, return a null value.
      return null;
     }
   }
 }

//Utilize the above function by adding a click handler when the user actually clicks on a letter guess

qwerty.addEventListener('click', (e) => {
  if (e.target.nodeName === 'BUTTON') {
      e.target.classList.add('chosen');
      e.target.setAttribute('disabled', true);
      const letterFound = checkLetter(e);
     }
   });
