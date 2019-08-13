const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0;

const reset = document.getElementsByClassName('btn__reset')[0];
const overlay = document.getElementById('overlay');

//Main screen disappears into the game after clicking "start game"

reset.addEventListener('click', () => {
  overlay.style.display = 'none';
});

//Array of phrases for game to choose from

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
      const listItem = document.createElement('li');
      listItem.textContent = arr[i];
      const ul = phrase.firstElementChild;
      ul.appendChild(listItem);

      if(phraseCharacters[i] !== ' '){
        phraseCharacters[i].className = "letter";
      }
  }
}

//Call the function to produce the new string of characters using phrases as the parameter, store it into the phraseArray constant. Then call the seconds function to display that value to the screen
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);
