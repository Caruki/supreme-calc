"use strict";

const calculatorOutput = document.querySelector(".calculator__output");
calculatorOutput.value = multiplicate(4, 6);

function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

function multiplicate(numberOne, numberTwo) {
  return numberOne * numberTwo;
}
