#!/usr/bin/env node

import { queryNameUser, questionUserEven } from '../src/index.js';

console.log('Welcome to the Brain Games!');

const name = queryNameUser();

console.log(`Hello, ${name}!\nAnswer 'yes' if the number is even, otherwise answer 'no'.`);

questionUserEven(name);
