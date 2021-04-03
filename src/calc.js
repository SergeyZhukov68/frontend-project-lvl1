import readlineSync from 'readline-sync';

const randomNum1 = () => Math.round(Math.random() * 10);
const randomNum2 = () => Math.round(Math.random() * 10);
const randomOperator = () => Math.round(Math.random() * 2);

const createExpression = (num1, num2, operator) => {
  const result = [];
  let expession;
  let answer;
  switch (operator) {
    case 0:
      expession = `${num1} + ${num2}`;
      answer = num1 + num2;
      result.push(expession, answer);
      break;
    case 1:
      expession = `${num1} - ${num2}`;
      answer = num1 - num2;
      result.push(expession, answer);
      break;
    case 2:
      expession = `${num1} * ${num2}`;
      answer = num1 * num2;
      result.push(expession, answer);
      break;
    default:
      break;
  }
  return result;
};

const questionUserCalc = (name) => {
  let expression;
  let answer;
  let i = 0;
  while (i < 3) {
    expression = createExpression(randomNum1(), randomNum2(), randomOperator());
    answer = readlineSync.question(`Question: ${expression[0]}\nYour answer: `);
    if (expression[1] === Number(answer)) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expression[1]}'.\nLet's try again, ${name}!`);
      return;
    }
    i += 1;
  }
};

export default questionUserCalc;
