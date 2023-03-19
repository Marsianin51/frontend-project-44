#!/usr/bin/env node
import { brainGame, getRandomInt } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".`';
const isEven = (num) => num % 2 === 0;
const game = () => {
  const anyNumber = getRandomInt(100);
  const question = `${anyNumber}`;
  const answear = isEven(anyNumber) ? 'yes' : 'no';
  return [question, answear];
};
const brainEven = () => brainGame(description, game);
export default brainEven;
