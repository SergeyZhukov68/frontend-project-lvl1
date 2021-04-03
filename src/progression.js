import readlineSync from 'readline-sync';

const beginValue = () => Math.round(Math.random() * 10);

const step = () => Math.round(Math.random() * 10) + 1;

const random = () => Math.round(Math.random() * 9);

const createProgression = (begVal, stepProg, randomVal) => {
  const result = [begVal];
  let first = begVal;
  for (let i = 0; i < 9; i += 1) {
    first += stepProg;
    result.push(first);
  }
  result[randomVal] = '..';
  return result.join(' ');
};

const removedAnswer = (begVal, stepProg, randomVal) => {
  const result = [begVal];
  let first = begVal;
  for (let i = 0; i < 9; i += 1) {
    first += stepProg;
    result.push(first);
  }
  return result[randomVal];
};

const questionUserProgression = (name) => {
  let i = 0;
  while (i < 3) {
    const beginProgression = beginValue();
    const stepProgression = step();
    const randomValProgression = random();
    const progression = createProgression(beginProgression, stepProgression, randomValProgression);
    const answerUser = readlineSync.question(`Question: ${progression}\nYour answer: `);
    const correctAnswer = removedAnswer(beginProgression, stepProgression, randomValProgression);
    if (correctAnswer === Number(answerUser)) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
    i += 1;
  }
};

export default questionUserProgression;
