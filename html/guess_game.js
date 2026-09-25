const readlinesync = require('readline-sync');
const randomNumber = Math.floor(Math.random()*100)+1;
const Maxattempt = 5;

console.log("I have picked a number between 1 to 100. You have 5 tries to guess it!");

for(let attempt = 1; attempt<=Maxattempt; attempt++){
    const userInput = readlinesync.question(`Attempt ${attempt}: You guess `);
    const guess = Number(userInput);


    if(guess===randomNumber){
        console.log('🎉 Correct! You guessed it.');
        break;
    }
    else if(guess>randomNumber){
        console.log('Too High ');
    }
    else{
        console.log("Too Low ");
    }
    if(attempt===Maxattempt){
        console.log(`❌ Sorry, you've used all your attempts. The number was ${randomNumber}.`);
    }
}