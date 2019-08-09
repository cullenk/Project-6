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

//Randomly chooses one of the phrases and plits all of the characters into an array

function getRandomPhraseAsArray(arr){
  const getRandomPhrase = phrases[Math.floor(Math.random() * phrases.length)].split(" ");
  return getRandomPhrase;
}

//Call the function to produce the new string

getRandomPhraseAsArray(phrases);
