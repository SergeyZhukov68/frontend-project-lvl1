#!/usr/bin/env node

import { queryNameUser, questionUserProgression } from '../src/index.js';

console.log('Welcome to the Brain Games!');

const name = queryNameUser();

console.log(`Hello, ${name}!\nWhat number is missing in the progression?`);

questionUserProgression(name);
