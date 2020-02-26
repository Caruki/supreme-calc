"use strict";

const calculatorOutput = document.querySelector(".calc-output");
const calculatorInputs = document.querySelectorAll(".calc-input");
const calculatorResult = document.querySelector(".calc-result");
const calculatorClear = document.querySelector(".calc-clear");

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

const numberOne = Number(calculatorInputs[3].innerText);
const numberTwo = Number(calculatorInputs[9].innerText);

function clickResult() {
  calculatorOutput.value = add(numberOne, numberTwo);
  console.log("clicked");
}

function clickClear() {
  calculatorOutput.value = "";
  console.log("clicked");
}

calculatorResult.addEventListener("click", clickResult);
calculatorClear.addEventListener("click", clickClear);
