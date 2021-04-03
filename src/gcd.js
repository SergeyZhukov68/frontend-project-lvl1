import readlineSync from 'readline-sync';

const getRandomNum1 = () => Math.round(Math.random() * 100);

const getRandomNum2 = () => Math.round(Math.random() * 100);

const createExpression = (num1, num2) => {
  const arr = [num1, num2];
  return arr;
};

const gcd = (a, b) => {
  if (a < b) {
    return gcd(b, a);
  } if (a === 0 || b === 0) {
    return (a + b);
  }
  return gcd(a % b, b);
};

const questionUserGcd = (name) => {
  let i = 0;
  while (i < 3) {
    const [num1, num2] = createExpression(getRandomNum1(), getRandomNum2());
    const answerUser = readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `);
    const correctAnswer = gcd(num1, num2);
    if (correctAnswer === Number(answerUser)) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
	    
      return;
    }
    i += 1;
  }
};

export default questionUserGcd;
