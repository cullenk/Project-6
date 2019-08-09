const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0;

const reset = document.getElementsByClassName('btn__reset')[0];
const overlay = document.getElementById('overlay');


reset.addEventListener('click', () => {
  overlay.style.display = 'none';
});
