#!/usr/bin/env node
import { brainGame, getRandomInt } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const nod = (x, y) => {
  if (y > x) return nod(y, x);
  if (!y) return x;
  return nod(y, x % y);
};

const game = () => {
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(100);
  const question = `${num1}  ${num2}`;
  const answear = (nod(num1, num2)).toString();
  return [question, answear];
};
const brainGCD = () => brainGame(description, game);
export default brainGCD;
