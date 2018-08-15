var wins = 0;
var losses = 0;
var choices = 8;
var listOfGuesses = [];
console.log(wins, losses);

var letters = "abcdefghijklmnopqrstuvwxyz";
console.log(letters);
console.log(letters.length);

var computerGuess = letters[Math.floor(Math.random() * letters.length)];
console.log(computerGuess);

function newGuess() {
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
}

function resetChoices() {
    choices = 8; 
}




document.onkeyup = function(event) {

    var userGuess = event.key; 
    

    if (userGuess === computerGuess) {
        wins ++, resetChoices(), newGuess(), listOfGuesses = [];
        console.log(wins, computerGuess);
       
    } if (userGuess != computerGuess) {
        choices --;
        listOfGuesses.push(userGuess);
       
    } if (choices === 0) {
        losses ++, resetChoices(), newGuess(), listOfGuesses = [];
        console.log(losses, computerGuess);
             
    }
    var html = 
    "<p>Guess what letter I am thinking of...</p>"+
    "<p> Wins: " + wins + "</p>" +
    "<p> Losses: " + losses + "</p>"+
    "<p> Guesses Left: " + choices + "</p>" +
    "<p> Guesses So Far: " + listOfGuesses + "</p>";
    
    document.querySelector('#Game').innerHTML = html; 
    
}
