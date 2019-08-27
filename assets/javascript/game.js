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
var wordList = ["apple", "yellow", "people", "giraffe", "sock", "table", "africa", "jellybean", "building", "death", "drink", "storm"];
var computerWord = wordList[Math.floor(Math.random() * wordList.length)];

console.log("computerWord: " + computerWord);
console.log(computerWord.length);

for (i = 0; i < computerWord.length; i++) {
    correctLetters[i]= "_";
    document.getElementById("correctLetters").innerHTML = correctLetters.join(' ');
}
// document.getElementById("correctLetters").innerHTML = correctLetters;
console.log(correctLetters)

// function runs everytime a key is pressed
document.onkeypress = function (guess) {
    
    // storing the key pressed in a variable
    var selectedLetter = guess.key;

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
            }
        };
    
        if (guessesRemaining === 0) {
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
