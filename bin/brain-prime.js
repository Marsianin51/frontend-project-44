#!/usr/bin/env node
import readlineSync from 'readline-sync';

const correct = 'Correct!';
let answear = '';
let name = '';
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nAnswer "yes" if given number is prime. Otherwise answer "no".`);
};

const getRandomInt = (max) => {
  const number = Math.floor(Math.random() * max);
  return number;
};

const sendQuestion = (int) => {
  console.log(`Question:${int}`);
};

const isPrime = (int1) => {
  if (int1 < 2) {
    return 'no';
  } if (int1 === 2) {
    return 'yes';
  }
  for (let i = 2; i < int1; i += 1) {
    if (int1 % i === 0) {
      return 'no';
    }
  } return 'yes';
};

const game = () => {
  greeting();
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(100);
    const rigthAnswear = isPrime(number);
    sendQuestion(number);
    answear = readlineSync.question('Your answer: ');
    if ((answear === rigthAnswear)) {
      console.log(correct);
    } else {
      console.log(`'${answear}' is wrong answer ;(. Correct answer was '${rigthAnswear}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default console.log(game());
