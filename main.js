
        // Get references to the DOM elements
const num1Input = document.getElementById("num1Input");
const num2Input = document.getElementById("num2Input");
const calculateButton = document.getElementById("btn");
const clearButton = document.getElementById("clearBtn");
const resultInput = document.getElementById("resultInput");

// Add event listener to the calculate button
calculateButton.addEventListener("click", calculateResult);

// Add event listener to the clear button
clearButton.addEventListener("click", clearInputsAndResult);

// Function to calculate the result
function calculateResult() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const result = num1 + num2;
  resultInput.value = result;
}

// Function to clear the inputs and result
function clearInputsAndResult() {
  num1Input.value = "";
  num2Input.value = "";
  resultInput.value = "";
}
  

