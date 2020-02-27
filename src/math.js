export function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

export function subtract(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

export function multiplicate(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

export function divide(numberOne, numberTwo) {
  return numberOne / numberTwo;
}

export function calculate(numberOne, numberTwo, operator) {
  switch (operator) {
    case "+":
      return add(numberOne, numberTwo);

    case "-":
      return subtract(numberOne, numberTwo);

    case "*":
      return multiplicate(numberOne, numberTwo);

    case "/":
      return divide(numberOne, numberTwo);

    default:
      alert("Incorrect value");
  }
}
