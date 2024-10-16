let displayValue = '';
let operator = '';
let firstOperand = null;
let memoryValue = 0; 

const display = document.getElementById('display');

function updateDisplay(value) {
    display.innerText = value;
}

function clearDisplay() {
    displayValue = '';
    operator = '';
    firstOperand = null;
    updateDisplay('0');
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        updateDisplay('0');
    } else {
        updateDisplay(displayValue);
    }
}

function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay(displayValue);
}

function appendOperator(op) {
    if (operator === '') {
        firstOperand = parseFloat(displayValue);
        operator = op;
        displayValue = '';
    }
}

function calculateResult() {
    if (operator !== '' && firstOperand !== null) {
        const secondOperand = parseFloat(displayValue);
        let result = 0;
        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
            case '%':
                result = firstOperand % secondOperand;
                break;
        }
        updateDisplay(result.toString());
        displayValue = result.toString();
        operator = '';
        firstOperand = null;
    }
}

function memoryClear() {
    memoryValue = 0;
    updateDisplay('0');
}

function memoryRecall() {
    displayValue = memoryValue.toString();
    updateDisplay(displayValue);
}

function memoryAdd() {
    memoryValue += parseFloat(displayValue);
}

function memorySubtract() {
    memoryValue -= parseFloat(displayValue);
}

function calculateSquareRoot() {
    displayValue = Math.sqrt(parseFloat(displayValue)).toString();
    updateDisplay(displayValue);
}

function calculateInverse() {
    displayValue = (1 / parseFloat(displayValue)).toString();
    updateDisplay(displayValue);
}
