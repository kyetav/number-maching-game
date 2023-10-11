'use strict';

// /*
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🥳 Correct Number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
// */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is not input
  if (!guess) {
    document.querySelector('.message').textContent = '👎⛔ No number';

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Correct Number';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#6A9C89';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is too high
    const winSound = document.getElementById('winSound');
    winSound.play();
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥 U LOST THE GAME BROTHA';
      document.querySelector('body').style.backgroundColor = '#9A3B3B';
      document.querySelector('.score').textContent = 0;
      const loseSound = document.getElementById('loseSound');
      loseSound.play();
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥 U LOST THE GAME BROTHA';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#9A3B3B';
      const loseSound = document.getElementById('loseSound');
      loseSound.play();
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  const loseSound = document.getElementById('loseSound');
  loseSound.pause();
  loseSound.currentTime = 0;

  const winSound = document.getElementById('winSound');
  winSound.pause();
  winSound.currentTime = 0;
});
