#!/usr/bin/env node

import { queryNameUser, questionUserGcd } from '../src/index.js';

console.log('Welcome to the Brain Games!');

const name = queryNameUser();

console.log(`Hello, ${name}\nFind the greatest common divisor of given numbers.`);

questionUserGcd(name);
