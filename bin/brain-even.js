import readlineSync from 'readline-sync';

const yes = 'yes';
const no = 'no';
const correct = 'Correct!';
let answear = '';
let name = '';
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
};
const getRandomInt = (max) => {
  const number = Math.floor(Math.random() * max);
  return number;
};
const sendQuestion = (int) => {
  console.log(`Question:${int}`);
};
const game = () => {
  greeting();
  const num = getRandomInt(100);
  for (let i = 0; i < 3; i += 1) {
    sendQuestion(num);
    answear = readlineSync.question('Your answer: ');
    if ((answear === yes && num % 2 === 0) || (answear === no && num % 2 !== 0)) {
      console.log(correct);
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      return;
    }
    console.log(`Congratulations, ${name}!`);
  }
};
export default game;
