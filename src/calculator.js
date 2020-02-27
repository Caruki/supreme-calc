"use strict";
import { add, subtract, multiplicate, divide } from "./math.js";

const calculatorOutput = document.querySelector(".calc-output");
const calculatorInputs = document.querySelectorAll(".calc-input");
const calculatorResult = document.querySelector(".calc-result");
const calculatorClear = document.querySelector(".calc-clear");
const calculatorOperators = document.querySelectorAll(".calc-operator");

let numberOne = 0;
let typeOperator = "";
let numberTwo = 0;

function clickResult() {
  numberTwo = Number(calculatorOutput.value);
  if (typeOperator === "+") {
    calculatorOutput.value = add(numberOne, numberTwo);
  } else if (typeOperator === "-") {
    calculatorOutput.value = subtract(numberOne, numberTwo);
  } else if (typeOperator === "*") {
    calculatorOutput.value = multiplicate(numberOne, numberTwo);
  } else if (typeOperator === "/") {
    calculatorOutput.value = divide(numberOne, numberTwo);
  } else {
    console.log("Error");
  }
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
    typeOperator = calculatorOperator.innerText;
    clickClear();
    console.log(typeOperator);
  });
}

calculatorOperators.forEach(calculatorOperatorClick);
