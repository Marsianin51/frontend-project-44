#!/usr/bin/env node
import { brainGame, getRandomInt } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const question = `${getRandomInt(100)}`;
  const answear = isPrime(question);
  return [question, answear];
};
const brainPrime = () => brainGame(description, game);
export default brainPrime;
