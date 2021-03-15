import readlineSync from 'readline-sync';

const queryNameUser = () => readlineSync.question('May I have your name? ');

export default queryNameUser;
