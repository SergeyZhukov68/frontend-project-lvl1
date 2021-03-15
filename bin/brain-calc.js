#!/usr/bin/env node

import { queryNameUser, questionUserCalc } from '../src/index.js';

console.log('Welcome to the Brain Games!');

const name = queryNameUser();

console.log(`Hello, ${name}!\nWhat is the result of the expression?`);

questionUserCalc(name);
