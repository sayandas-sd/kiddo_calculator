const display = document.getElementById("displayResult");

function displayButton(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = "";
}


function calculate() {
    try{
        display.value = eval(display.value);
    } catch(err) {
        display.value = "Incorrect";
    }
}