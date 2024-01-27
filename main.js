const screenPara = document.getElementById('screen-para');
const buttonsContainer = document.getElementById('buttons-container');
const buttonsArray = Array.from(buttonsContainer.querySelectorAll('button'));
const btnObj = declareButtons(buttonsArray);

/* ----- Declare all buttons inside an object ----- */
function declareButtons(buttonsArray, obj = {}) {
    let firstRow = 7; let secondRow = 4; let thirdRow = 1;
    for (let i = 0; i <= 16; i++) {
        if (i >= 0 && i <= 2) {
            obj[`btn${firstRow}`] = buttonsArray[i];
            firstRow++;
        } else if (i >= 4 && i <= 6) {
            obj[`btn${secondRow}`] = buttonsArray[i];
            secondRow++;
        } else if (i >= 8 && i <= 10) {
            obj[`btn${thirdRow}`] = buttonsArray[i];
            thirdRow++;
        } else if (i === 13) {
            obj.btn0 = buttonsArray[i];
        } else if (i === 3) {
            obj.btnPlus = buttonsArray[i];
        } else if (i === 7) {
            obj.btnMinus = buttonsArray[i];
        } else if (i === 11) {
            obj.btnTimes = buttonsArray[i];
        } else if (i === 12) {
            obj.btnClear = buttonsArray[i];
        } else if (i === 14) {
            obj.btnEqual = buttonsArray[i];
        } else if (i === 15) {
            obj.btnDivision = buttonsArray[i];
        }
    }
    return obj;
}

/* ----- Operations Functions ----- */
function addNumbers(num1, num2) { return num1 + num2 }
function subtractNumbers(num1, num2) { return num1 - num2 }
function multiplyNumbers(num1, num2) { return num1 * num2 }
function divideNumbers(num1, num2) { return num1 / num2 }