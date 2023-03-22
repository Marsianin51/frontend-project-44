#!/usr/bin/env node
import { brainGame, getRandomInt } from '../index.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const rigthanswear = (int1, int2, operator) => {
  let res = '';
  // eslint-disable-next-line default-case
  switch (operator) {
    case '+': res = (int1 + int2).toString(); break;
    case '-': res = (int1 - int2).toString(); break;
    case '*': res = (int1 * int2).toString(); break;
  }
  return res;
};
const game = () => {
  const operator = operators[getRandomInt(3)];
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(100);
  const question = `${num1} ${operator} ${num2}`;
  const answear = rigthanswear(num1, num2, operator);
  return [question, answear];
};
const brainCalc = () => brainGame(description, game);
export default brainCalc;
