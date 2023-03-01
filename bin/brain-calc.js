#!/usr/bin/env node
import readlineSync from 'readline-sync';

const correct = 'Correct!';
let answear = '';
let name = '';
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nWhat is the result of the expression?`);
};
const getRandomInt = (max) => {
  const number = Math.floor(Math.random() * max);
  return number;
};
const sendQuestion = (int1, int2) => {
  console.log(`Question:${int1}+${int2}`);
};
const game = () => {
  greeting();
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(100);
    const num2 = getRandomInt(100);
    sendQuestion(num1, num2);
    const sum = (num1 + num2).toString();
    answear = readlineSync.question('Your answer: ');
    if ((answear === sum)) {
      console.log(correct);
    } else {
      console.log(`'${answear}' is wrong answer ;(. Correct answer was '${sum}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default console.log(game());
