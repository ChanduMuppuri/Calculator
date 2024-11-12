const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);//inbuilt function which evaluates the given expression
    //we have put it in try block because if input like 1.23+= then like that inputs it display Error message in display.
  } catch (error) {
    display.value = "Error";
  }
}