'use strict';

// 1. Type one
const titheInput = document.querySelector('.the-tithe');

const valueTithe = document.querySelector('.tithe-value');

const calculator = document.querySelector('.btn-calculate');

// document.querySelector('.btn-calculate').addEventListener('click', function () {
//   let amount = titheInput.value;
//   let tithe = (amount / 100) * 10;
//   valueTithe.textContent = `Your tithe is  £${Math.trunc(tithe)}`;
// });

// 2. Type two

function tithe() {
  let amount = titheInput.value;
  let tithe = (amount / 100) * 10;
  valueTithe.textContent = `Your tithe is  £${Math.round(tithe * 100) / 100}`;
}

calculator.addEventListener('click', tithe);

// let amount = document.querySelector('.the-tithe').value;
// document.querySelector(
//   '.tithe-value'
// ).textContent = `Your tithe is  £${Math.trunc(tithe)}.00`;

console.log('parko');
