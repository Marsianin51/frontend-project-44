#!/usr/bin/env node
import { brainGame, getRandomInt } from '../index.js';

const description = 'What is the result of the expression?';
const game = () => {
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(100);
  const question = `${num1}+${num2}`;
  const answear = (num1 + num2).toString();
  return [question, answear];
};
const brainCalc = () => brainGame(description, game);
export default brainCalc;
