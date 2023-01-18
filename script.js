'use strict';



let score = 20;
let highScore = 0;


// this function generates a random number(between 1 and 20)
const numberGenerator = function(){
    let number = Math.trunc(Math.random() * 20) + 1;
    return number;
}

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

const displayHighscore = function(points){
    document.querySelector('.highscore').textContent = points;
}

let secretNumber = numberGenerator(); 

document.querySelector('.check').addEventListener('click', function(){
    const guess =  Number(document.querySelector('.guess').value);

    if(!guess){
        displayMessage('No Number!');
    }

    else if (guess === secretNumber) {
        displayMessage('You Won!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;
        displayHighscore(highScore);
        // document.querySelector('.highscore').textContent = highScore;
        if (score > highScore){
            highScore = score
            displayHighscore(score);
            // document.querySelector('.highscore').textContent = score; 
        };
        
    } 
    else if (guess !== secretNumber){
        if (score > 1){
            displayMessage(guess > secretNumber ? 'Too High' : 'Too Low')
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage('You lost the game')
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';

        }
    } 
});




document.querySelector('.again').addEventListener('click', function(){
    secretNumber = numberGenerator();
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
    score = 20;
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('input').value = ""
    displayMessage('Start guessing...');
});




