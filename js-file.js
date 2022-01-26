let displayValue = "";
let operator = "";
const inputButtons = document.querySelectorAll('.digit-buttons, .operator-buttons');
const displayScreen = document.querySelector('.display');
const equalButton = document.querySelector('#button-equal');
const clearButton = document.querySelector('#button-clear');

displayScreen.textContent = displayValue;
inputButtons.forEach(button =>button.addEventListener('click',populateDisplay));
equalButton.addEventListener('click', computeResult);
clearButton.addEventListener('click', clear);
function clear(e) {
    displayValue = '';
    operator = '';
    displayScreen.innerText = '';
}

function computeResult(e) {
    const firstNumber = Number(displayValue.split(operator)[0]);
    const secondNumber = Number(displayValue.split(operator)[1]);
    switch (operator) {
        case '+':
            displayScreen.innerText = add(firstNumber, secondNumber);
            operator = '';
            displayValue = '';
            break;
        case '-':
            displayScreen.innerText = subtract(firstNumber, secondNumber);
            operator = '';
            displayValue = '';
            break;
        case 'x':
            displayScreen.innerText = multiply(firstNumber, secondNumber);
            operator = '';
            displayValue = '';
            break;
        case '/':
            displayScreen.innerText = divide(firstNumber, secondNumber);
            operator = '';
            displayValue = '';
            break;
        default:
            break;
    }
}
function populateDisplay(e) {
    displayValue += e.target.innerText;
    displayScreen.textContent = displayValue;
    if(e.target.innerText === '+' || e.target.innerText === '-' || e.target.innerText === 'x' || e.target.innerText === '/') {
        operator = e.target.innerText;
    }
}

function add(num1, num2) {
    return num1 + num2
};

function subtract(numberOne, numberTwo) {
    return numberOne - numberTwo
};
function multiply(num1, num2) {
    return num1 * num2
    
};

function power(base, power) {
    return base ** power
};
function divide(dividend, divisor) {
    return dividend / divisor    
}
function operate(operator, num1, num2) {
    return operator(num1, num2)
}