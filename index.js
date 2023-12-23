require('dotenv').config();

const test = process.env.TESTE;

const p = document.querySelector('.p');

p.innerHTML = test;

