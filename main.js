window.addEventListener('load', init);

// Globals (global variables used within functions)

// Available Levels
const levels = {
    easy: 10,
    medium: 3,
    hard: 1
}

// To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements 
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'Adidas',
    'Nike',
    'Supreme',
    'Vetements',
    'Stussy',
    'Off-White',
    'Undercover',
    'HUF',
    'Obey',
    'Kith',
    'Undefeated',
    'Bape',
    'Carhartt',
    'WTAPS',
    'Palace',
    'CDG Play ',
    'Patta',
    'New Balance',
    'The Hundreds',
    'Cav Empt',
    '10.Deep',
    'Undercover',
    'Golf Wang',
    'Aime Leon Dore',
    'Brain Dead',
    'Neighborhood',
    'Awake NY',
    'Noah',
    'Needles',
    'Balenciaga',
];

//Initializing game
function init() {
    // Show number of seconds in UI
    seconds.innerHTML = currentLevel;
    // Load word from array
    showWord(words);
    // Start matching on word input
    wordInput.addEventListener('input', startMatch);
    /* Call countdown for every second; 
    to repeat something use setInterval function and pass countdown function
    to run every second where 1000 miliseconds = 1 second */
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
    if(matchWords()) {
      isPlaying = true;
      time = currentLevel + 1;
      showWord(words);
      wordInput.value = '';
      score++;
    }


    // If score is -1, display 0
    if(score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

// Match currentWord to wordInput
function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

// Pick and show random word
function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length) 
    /* creates random array index where math.floor rounds down and math.random 
    generates a random number then we multiply by whatever number of words we get 
    from the length property */

    // Output random word:
    currentWord.innerHTML = words[randIndex];
    /* currentWord variable is defined above along with the class seen as the H2 on the webpage
    now every time you reload page, words will shuffle with refresh on screen */

}

// Countdown timer
function countdown() {
    // Make sure time does not run out
    if(time > 0) {
        time--;
    } else if(time === 0) {
        // Game is over
        isPlaying = false;
    }
    // Output time
    timeDisplay.innerHTML = time;
}

// Check game status aka if not playing/time is out
function checkStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!';
        score = -1; 
    }
}