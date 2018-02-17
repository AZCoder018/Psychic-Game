
// Create variables

 var wins = 0;

 var losses = 0;

 var guessesLeft = 9;

 //Empty braackets for guesses so far, because user will choose by onkeyup when playing

 var guessesSoFar = []; 

 //Need array of alphabet from which computer will randomly choose

 var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

//What happens when user presses a letter on keyboard; computer picks letter at random, user guess goes to guessesSoFar array

 document.onkeyup = function(event) {

     var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 

     var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; 

     guessesSoFar.push(userGuess); 

//When user guess = computer guess, user wins, alert given, and guesses left must reset to 9; user's guesses so far must go back to blank (or no characters)

     if (userGuess == computerGuess) {

         wins++;

         alert("You beat Carnac the Magnificent...this time.");

         guessesLeft = 9; 

         guessesSoFar.length = 0; 

     }

//When guesses left = 0, computer wins, alert given, and guesses left must reset to 9; user's guesses so far must go back to blank (or no characters)

     else if (guessesLeft == 0){

         losses++;

         alert("You lose, Carnac wins. Hiyo!!!");

         guessesLeft = 9;

         guessesSoFar.length = 0;
     }

//When user's guess = computer's guess, then subtract 1 from guesses left

     else if (userGuess !== computerGuess){

         guessesLeft--; 
     }  

// Totals to HTML

     var html = "<p>Guess What Letter I'm Thinking Of </p>" +

        "<p>Total Wins: " + 

            wins + 

        "</p>" +

        "<p>Total Losses: " + 

            losses + 

         "</p>" +

         "<p>Guesses Left: " + 

            guessesLeft + 

        "</p>" +

        "<p>Your Guesses So Far: " +

            guessesSoFar +

        "</p>";

//HTML to game <div>

     document.querySelector('#game').innerHTML = html;
 
    }