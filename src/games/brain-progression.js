#!/usr/bin/env node
import { brainGame, getRandomInt } from '../index.js';

const description = 'What number is missing in the progression?';
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
  const prog = makeProgression();
  const numberofsymb = getRandomInt(9);
  const rigthNum = (prog[numberofsymb]).toString();
  prog.splice(numberofsymb, 1, '..');
  const question = prog.join(' ');
  const answear = rigthNum;
  return [question, answear];
};
const brainProgression = () => brainGame(description, game);
export default brainProgression;
