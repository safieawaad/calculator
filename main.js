/* ----- Start: Declarations ----- */
const screenPara = document.getElementById('screen-para');
const buttonsContainer = document.getElementById('buttons-container');
let num1;
let num2;
let opertator;
/* ----- End: Declarations ----- */

/* ----- Start: Declare all buttons inside an object ----- */
const buttonsObj = {
    array: Array.from(buttonsContainer.querySelectorAll('button')),
    declareButtons: function (obj = {}) {
        let firstRow = 7; let secondRow = 4; let thirdRow = 1;
        for (let i = 0; i <= 16; i++) {
            if (i >= 0 && i <= 2) {
                obj[`btn${firstRow}`] = this.array[i];
                firstRow++;
            } else if (i >= 4 && i <= 6) {
                obj[`btn${secondRow}`] = this.array[i];
                secondRow++;
            } else if (i >= 8 && i <= 10) {
                obj[`btn${thirdRow}`] = this.array[i];
                thirdRow++;
            } else if (i === 13) {
                obj.btn0 = this.array[i];
            } else if (i === 3) {
                obj.btnPlus = this.array[i];
            } else if (i === 7) {
                obj.btnMinus = this.array[i];
            } else if (i === 11) {
                obj.btnTimes = this.array[i];
            } else if (i === 12) {
                obj.btnClear = this.array[i];
            } else if (i === 14) {
                obj.btnEqual = this.array[i];
            } else if (i === 15) {
                obj.btnDivision = this.array[i];
            }
        }
        return obj;
    }
};
const btn = buttonsObj.declareButtons();
/* ----- End: Declare all buttons inside an object ----- */

/* ----- Start: Program ----- */
function operate(num1, num2, opertator) {
    if (opertator === btn.btnPlus) {
        return addNumbers(num1, num2);
    } else if (opertator === btn.btnMinus) {
        return subtractNumbers(num1, num2);
    } else if (opertator === btn.btnTimes) {
        return multiplyNumbers(num1, num2);
    } else if (opertator === btn.btnDivision) {
        return divideNumbers(num1, num2);
    }
}
/* ----- End: Program ----- */

/* ----- Start: Operations Functions ----- */
function addNumbers(num1, num2) { return num1 + num2 }
function subtractNumbers(num1, num2) { return num1 - num2 }
function multiplyNumbers(num1, num2) { return num1 * num2 }
function divideNumbers(num1, num2) { return num1 / num2 }
/* ----- End: Operations Functions ----- */