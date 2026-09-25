const randomNumber = Math.floor(Math.random() * 100) + 1;
const readlineSync = require('readline-sync');

const userInput = readlineSync.question('Guess a number between 1 and 100: ');
const guess = Number(userInput);

if (guess === randomNumber) {
  console.log('🎉 Correct! You guessed it.');
} else {
  console.log(`❌ Wrong! The correct number was ${randomNumber}.`);
}

