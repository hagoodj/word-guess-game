// defining variables
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var lettersGuessed = [];
var correctLetters = [];

// writing variables to website
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;
document.getElementById("guessesRemaining").innerHTML = "Guesses Remaining: " + guessesRemaining;
document.getElementById("lettersGuessed").innerHTML = "Letters Already Guessed: " + lettersGuessed;

// define alphabet array and selecting a random letter
var wordList = ["apple", "yellow", "people", "giraffe", "sock", "table", "africa", "jellybean", "building", "death", "drink", "storm", "tight", "windows", "left", "press", "underneath", "lunch"];
var computerWord = wordList[Math.floor(Math.random() * wordList.length)];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

console.log("computerWord: " + computerWord);
console.log(computerWord.length);

for (i = 0; i < computerWord.length; i++) {
    correctLetters[i]= "_";
    document.getElementById("correctLetters").innerHTML = correctLetters.join(' ');
}
// document.getElementById("correctLetters").innerHTML = correctLetters;
console.log(correctLetters)

function myFunction() {
    var x = document.getElementById("fname");
    x.value = "";
  }

// function runs everytime a key is pressed
document.onkeypress = function (guess) {
    
    // storing the key pressed in a variable
    var selectedLetter = guess.key;
    selectedLetter = selectedLetter.toLowerCase();
    
    // checking stored variables
    console.log("computerWord: " + computerWord);
    console.log("selectedLetter: " + selectedLetter);
    console.log("***");

    for (i = 0; i < computerWord.length; i++) {

        if (computerWord[i] === selectedLetter) {
            correctLetters[i] = selectedLetter;
            document.getElementById("correctLetters").innerHTML = correctLetters.join(' ');
        };

    };

    if (lettersGuessed.indexOf(selectedLetter) !== -1) {
        alert("You've already guessed that letter! Try picking another one.")
    }

    if (alphabet.indexOf(selectedLetter) === -1) {
        alert("Please select a letter.")
    }

    if (alphabet.indexOf(selectedLetter) !== -1) {
       
        if (lettersGuessed.indexOf(selectedLetter) === -1) { 

            if (computerWord.indexOf(selectedLetter) === -1) {
                guessesRemaining--;
                document.getElementById("guessesRemaining").innerHTML = "Guesses Remaining: " + guessesRemaining;
                lettersGuessed.push(selectedLetter);
                document.getElementById("lettersGuessed").innerHTML = "Letters Already Guessed: " + lettersGuessed;
            };
        
            if (computerWord === correctLetters.join('')) {
                wins++;
                document.getElementById("wins").innerHTML = "Wins: " + wins;
                guessesRemaining = 10;
                document.getElementById("guessesRemaining").innerHTML = "Guesses Remaining: " + guessesRemaining;
                lettersGuessed = [];
                document.getElementById("lettersGuessed").innerHTML = "Letters Already Guessed: " + lettersGuessed;
                computerWord = wordList[Math.floor(Math.random() * wordList.length)];
                correctLetters = [];
                for (i = 0; i < computerWord.length; i++) {
                    correctLetters[i]= "_";
                    document.getElementById("correctLetters").innerHTML = correctLetters.join(' ');
                };
            };
        
            if (guessesRemaining === 0) {
                alert("Nope. The word was: " + computerWord)
                alert("Try again!")
                losses++;
                document.getElementById("losses").innerHTML = "Losses: " + losses;
                guessesRemaining = 10;
                document.getElementById("guessesRemaining").innerHTML = "Guesses Remaining: " + guessesRemaining;
                lettersGuessed = [];
                document.getElementById("lettersGuessed").innerHTML = "Letters Already Guessed: " + lettersGuessed;
                computerWord = wordList[Math.floor(Math.random() * wordList.length)];
                correctLetters = [];
                for (i = 0; i < computerWord.length; i++) {
                    correctLetters[i]= "_";
                    document.getElementById("correctLetters").innerHTML = correctLetters.join(' ');
                };
            };

        };
    
    };

};
