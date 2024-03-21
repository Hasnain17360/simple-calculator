#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNumber" },
  { message: "Enter your second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the following operators to peroform an action:",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division", "Average"],
  },
]);

// Conditional Statement

if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
}

// for Subtraction
else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
}

// for Multiplication
else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
}

// for Division
else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
}

// for Average
else if (answer.operator === "Average") {
  console.log((answer.firstNumber + answer.secondNumber)/2 );
}

// other
else {
  console.log("Please select valid operator");
}

console.log("The End");