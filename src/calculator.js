"use strict";

const calculatorOutput = document.querySelector(".calc-output");
const calculatorInputs = document.querySelectorAll(".calc-input");
const calculatorResult = document.querySelector(".calc-result");
const calculatorClear = document.querySelector(".calc-clear");
const calculatorOperators = document.querySelectorAll(".calc-operator");

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

let numberOne = 0;
let numberTwo = 0;

function clickResult() {
  numberTwo = Number(calculatorOutput.value);
  calculatorOutput.value = add(numberOne, numberTwo);
  console.log("clicked");
}

function clickClear() {
  calculatorOutput.value = "";
  console.log("clicked");
}

calculatorResult.addEventListener("click", clickResult);
calculatorClear.addEventListener("click", clickClear);

function calculatorInputClick(calculatorInput) {
  calculatorInput.addEventListener("click", function() {
    calculatorOutput.value += calculatorInput.innerText;
  });
}

calculatorInputs.forEach(calculatorInputClick);

function calculatorOperatorClick(calculatorOperator) {
  calculatorOperator.addEventListener("click", function() {
    numberOne = Number(calculatorOutput.value);
    clickClear();
  });
}

calculatorOperators.forEach(calculatorOperatorClick);
