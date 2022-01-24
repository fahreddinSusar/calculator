function add(num1, num2) {
    return num1 + num2
};

function subtract(numberOne, numberTwo) {
    return numberOne - numberTwo
};
function multiply(arr) {
    if (arr.length < 1) { return 0 }
    return arr.reduce((cumulative, currentValue) => cumulative * currentValue, 1);
};

function power(base, power) {
    return base ** power
};
function divide(dividend, divisor) {
    return dividend / divisor    
}