// Function definitions
function appendToDisplay(value) {
  let display = document.getElementById("display");
  display.value += value;
}

function clearDisplay() {
  let display = document.getElementById("display");
  display.value = "";
}

function calculate() {
  let display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
