#!/usr/bin/env node

import { queryNameUser } from '../src/index.js';

console.log('Welcome to the Brain Games!');

const name = queryNameUser();

console.log(`Hello, ${name}!`);
