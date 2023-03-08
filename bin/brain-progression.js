#!/usr/bin/env node
import readlineSync from 'readline-sync';

const correct = 'Correct!';
let answear = '';
let name = '';
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nWhat number is missing in the progression?`);
};

const getRandomInt = (max) => {
  const number = Math.floor(Math.random() * max);
  return number;
};

const sendQuestion = (int) => {
  console.log(`Question:${int}`);
};

const makeProgression = () => {
  const prog = [];
  let num = getRandomInt(100);
  const step = getRandomInt(100);
  while (prog.length <= 10) {
    prog.push(num);
    num += step;
  }
  return prog;
};

const game = () => {
  greeting();
  for (let i = 0; i < 3; i += 1) {
    const prog = makeProgression();
    const numberofsymb = getRandomInt(9);
    const rigthNum = (prog[numberofsymb]).toString();
    prog.splice(numberofsymb, 1, '..');
    const progtoQuestion = prog.join(' ');
    sendQuestion(progtoQuestion);
    answear = readlineSync.question('Your answer: ');
    if ((answear === rigthNum)) {
      console.log(correct);
    } else {
      console.log(`'${answear}' is wrong answer ;(. Correct answer was '${rigthNum}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default console.log(game());
