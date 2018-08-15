// ----- ARRAY OF LETTERS ----- //
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// ----- RANDOM SELECTION ----- //
var randomLetter = alpha[Math.floor(Math.random() * 26)];
var chosenLetter = alpha[randomLetter]
// ----- STARTING STATS ----- //
var wins = 0;
var losses = 0;
var guesses = 10;
// ----- GUESSES ----- //
var guessList = [];
// ----- GAME END RESET FUNCTIONS ----- //
function resetLetter() {
    randomLetter = alpha[Math.floor(Math.random() * alpha.length)];
}
function resetGuesses() {
    guesses = 10;
}
// ----- USER GUESS ----- //
document.onkeyup = function (event) {
    var userGuess = event.key;
    // ----- WIN ----- //
    if (userGuess === randomLetter) {
        wins++ , resetLetter(), resetGuesses(), guessList = [];
    // ----- WRONG GUESS ----- //
    } if (userGuess != randomLetter) {
        guesses--;
        guessList.push(userGuess);
    // ----- LOSS ----- //
    } if (guesses === 0) {
        losses++ , resetLetter(), resetGuesses(), guessList = [];
    }
    // ----- HTML REPLACEMENT ----- //
    document.querySelector('#winsLosses').innerHTML =
        "<h4>WINS:</h4><br/><p>" + wins + "</p>" +
        "<h4>LOSSES:</h4><br/><p>" + losses + "</p>";
    document.querySelector('#lettersGuessed').innerHTML =
        "<h4>ALREADY GUESSED:</h4><br/><p>" + guessList + "</p>";
    document.querySelector('#guessesLeft').innerHTML =
        "<h4>GUESSES LEFT:</h4><br/><p>" + guesses + "</p>";
}