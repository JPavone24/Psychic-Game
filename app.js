var letters = ["a", "b", "c"];

// This array will hold what we guess
var guessedLetters = [];

// This variable will be randomly assigned one of the three letters
var letterToGuess = null;

// This is what we'll use to count down
var guessesLeft = 9;

// This is the counter for wins/losses
var wins = 0;
var losses = 0;
var letter;


// Below we created three functions to updateGuesses, updateGuessesLeft, and updateGuessesSoFar
var updateGuessesLeft = function() {
  // Here we are grabbing the HTML element and setting it equal to the guessesLeft.
  // (i.e. guessesLeft will get displayed in HTML)
  document.querySelector("#guesses-left").innerHTML = guessesLeft;
};


var updateLetterToGuess = function() {
  // Here we get a random letterToGuess and assign it based on a random generator (only looking at a, b, or c)
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuessesSoFar2 = function() {
  // Here we take the guesses the user has tried -- then display it as letters separated by commas.
  document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");

};
var updateGuessesSoFar = function() {
  // Here we take the guesses the user has tried -- then display it as letters separated by commas.
  document.querySelector("#guessedLetter").innerHTML = letter;
  
  

};


// Function will be called when we reset everything
var reset = function() {
  guessesLeft = 9;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
  updateGuessesSoFar2();
};

// Execute on page load.
updateLetterToGuess();
updateGuessesLeft();

// This function will capture the keyboard clicks.
document.onkeydown = function(event) {
  // It's going to reduce the guesses by one
  guessesLeft--;

  // Lowercase the letter
  letter = event.key.toLowerCase();

  // Then add the guess to the guessedLetters array
  guessedLetters.push(letter);

  // Then its going to run the update functions
  updateGuessesLeft();
  updateGuessesSoFar();
  updateGuessesSoFar2()


  // We'll check if there's a match.
  if (letter === letterToGuess) {

    // If there is then we win and we'll update the HTML to display the win.
    wins++;
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#guess").innerHTML = "Congratulations, you are psychic";
    ;

    // Then we'll reset the game
    reset();
  }

  // If we are out of guesses...
  if (guessesLeft === 0) {

    // Then we will loss and we'll update the HTML to display the loss.
    losses++;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#guess").innerHTML = "Sorry, you are not Psychic";
    document.querySelector("#guessedLetter").innerHTML = "You are Psychic!";

    // Then we'll call the reset.
    reset();
  }
};