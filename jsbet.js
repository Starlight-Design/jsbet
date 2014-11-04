$(document).ready(function(){

// Global Variables //
  var randNum = Math.floor((Math.random() * 10) + 1);
  var startingCash = 100;

// Prompt Variables //
  var playerBet = 0;
  var numBet5 = 5;
  var numBet10 = 10;

  $('.totalMoney').text('100');

    $('#bet5').on('click', function(e){
      playerBet = numBet5;
      $(this).toggleClass("active");
    });

    $('#bet10').on('click', function(e){
      playerBet = numBet10;
      $(this).toggleClass("active");
    });

    $('#submit').on('click', function(e){
      var selectNum = $('#numPrompt').val();
        if (playerBet != 0 && selectNum != 0) {
          var gameNum = randNum;
            if (selectNum == gameNum + 1 || selectNum == gameNum - 1) {
              startingCash == startingCash;
              $('.details').html('<h4><em>You were one number off!</em></h4>');
            }
            else {
              if (selectNum == gameNum) {
                startingCash == (startingCash += (playerBet * 2));
                $('.totalMoney').text(startingCash);
              }
              else {
                startingCash == (startingCash -= playerBet);
                $('.totalMoney').text(startingCash);
              }
            }
        }
        else {
          alert("You did not place a bet or select a valid number!");
        }
    });
});