import readlineSync from 'readline-sync';

const getRandomNum = () => Math.round(Math.random() * 100);

const isPrime = (n) => {
  if (n === 1) {
    return 'no';
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const questionUserPrime = (name) => {
  let i = 0;
  while (i < 3) {
    const randomValue = getRandomNum();
    const answerUser = readlineSync.question(`Question: ${randomValue}\nYour answer: `);
    const correctAnswer = isPrime(randomValue);
    if (correctAnswer === answerUser) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${isPrime(randomValue)}'.\nLet's try again, ${name}`);
      return;
    }
    i += 1;
  }
};

export default questionUserPrime;
