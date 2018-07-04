// <!-- 
// There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.
// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
// The game will hide this amount until the player clicks a crystal.
// When a crystal is clicked, the player's score counter is updated
// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.
// The game restarts whenever the player wins or loses.
// When the game begins again, the player should see a new random number. 
// All crystals have new hidden values when the game resets. 
// The user's score (and score counter) will reset to zero.
// The app should show the number of games the player wins and loses. 
// Do not refresh the page as a means to restart the game.
// -->

$(document).ready(function () {

    var targetNumber = Math.floor(Math.random() * 121) + 19;
    document.querySelector('#targetnumber').innerHTML = targetNumber;


    var number1 = Math.floor(Math.random() * 11) + 1;
    var number2 = Math.floor(Math.random() * 11) + 1;
    var number3 = Math.floor(Math.random() * 11) + 1;
    var number4 = Math.floor(Math.random() * 11) + 1;

    var score = 0;
    var wins = 0;
    var losses = 0;

    document.querySelector('#Wins').innerHTML = wins;
    document.querySelector('#Losses').innerHTML = losses;

    function reset() {
        targetNumber = Math.floor(Math.random() * 121) + 19;
        document.querySelector('#targetnumber').innerHTML = targetNumber;
        number1 = Math.floor(Math.random() * 11) + 1;
        number2 = Math.floor(Math.random() * 11) + 1;
        number3 = Math.floor(Math.random() * 11) + 1;
        number4 = Math.floor(Math.random() * 11) + 1;
        score = 0;
        document.querySelector('#yourscore').innerHTML = score;

    }

    function win() {

        alert("You win!");
        wins++;
        document.querySelector('#Wins').innerHTML = wins;
        reset();
    }



    function lose() {

        alert("You lose!");
        losses++;
        document.querySelector('#Losses').innerHTML = losses;
        reset();
    }



    $('#Crystal1').on('click', function () {
        score = score + number1;
        document.querySelector('#yourscore').innerHTML = score;
        if (score == targetNumber) {
            win();
        } else if (score > targetNumber) {
            lose();
        }
    });

    $('#Crystal2').on('click', function () {
        score = score + number2;
        document.querySelector('#yourscore').innerHTML = score;
        if (score == targetNumber) {
            win();
        } else if (score > targetNumber) {
            lose();
        }
    });


    $('#Crystal3').on('click', function () {
        score = score + number3;
        document.querySelector('#yourscore').innerHTML = score;
        if (score == targetNumber) {
            win();
        } else if (score > targetNumber) {
            lose();
        }
    });


    $('#Crystal4').on('click', function () {
        score = score + number4;
        document.querySelector('#yourscore').innerHTML = score;
        if (score == targetNumber) {
            win();
        } else if (score > targetNumber) {
            lose();
        }
    });

});