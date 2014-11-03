$(document).ready(function(){

// Global Variables //
  var randNum = Math.floor((Math.random() * 10) + 1);
  var startingCash = 100;

// Prompt Variables //
  var numBet = prompt("Enter a bet between $5-$10!", "Enter your bet!");
  var numPrompt = prompt("Enter a number between 1-10!", "Pick a number!");

  var gameNum = randNum;
    if (numPrompt == gameNum + 1 || numPrompt == gameNum - 1) {
      alert("You were one number off. Your current money is" + " " + startingCash + ".");
      startingCash == startingCash;
    }
      else if (numPrompt == gameNum) {
        startingCash == (startingCash += (numBet * 2));
          alert("You got it! Your current money is" + " " + startingCash + ".");
      } 
        else {
          alert("Sorry, that was the wrong number. Your current money is" + " " + startingCash + ".")
          startingCash == (startingCash -= numBet);
        }
});