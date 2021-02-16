import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');

console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`);

const checkNumberEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const getNumber = () => Math.round(Math.random() * 1000);

const questionNumber = () => {
  let number;
  let i = 0;
  while (i < 3) {
    number = getNumber();
    const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
    if (checkNumberEven(number) === answer) {
      console.log('Correct!');
      if (i === 2) {
        return console.log(`Congratulations, ${name}!`);
      }
    } else {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}`);
    }
    i += 1;
  }
};

export default questionNumber;
