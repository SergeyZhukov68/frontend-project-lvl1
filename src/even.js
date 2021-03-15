import readlineSync from 'readline-sync';

const checkNumberEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const getNumber = () => Math.round(Math.random() * 1000);

const questionUserEven = (name) => {
  let number;
  let i = 0;
  while (i < 3) {
    number = getNumber();
    const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
    if (checkNumberEven(number) === answer) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${checkNumberEven(number)}'.\nLet's try again, ${name}`);
      return;
    }
    i += 1;
  }
};

export default questionUserEven;
