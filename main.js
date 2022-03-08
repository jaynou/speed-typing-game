window.addEventListener('load', init);

// Globals
let time = 5;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    
]