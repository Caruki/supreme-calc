"use strict";

const calculatorOutput = document.querySelector(".calc-output");
const calculatorInput = document.querySelector(".calc-input");

function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

function multiplicate(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

function divide(numberOne, numberTwo) {
  return numberOne / numberTwo;
}

const NumberOne = Number(calculatorInput.innerText);
calculatorOutput.value = add(NumberOne, 33);
