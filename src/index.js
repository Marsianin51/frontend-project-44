#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const getRandomInt = (max) => {
  const number = Math.floor(Math.random() * max);
  return number;
};

export const brainGame = (description, game) => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!\n${description}`);
  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${user}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${user}!`);
};

export default brainGame;
