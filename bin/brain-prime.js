#!/usr/bin/env node

import { queryNameUser, questionUserPrime } from '../src/index.js';

console.log('Welcome to the Brain Games!');

const name = queryNameUser();

console.log(`Hello, ${name}\nAnswer "yes" if given number is prime. Otherwise answer "no".`);

questionUserPrime(name);
