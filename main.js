const SCREEN = document.getElementById('screen');
const BUTTONS_CONTAINER = document.getElementById('buttons-container');
let screenNum;
let result;
let operator;
let counter = 0;

function roundAccurately(num, places) {
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}

/* Operations functions */
function addNumbers(result, screenNum) { return result + screenNum }
function subtractNumbers(result, screenNum) { return result - screenNum }
function multiplyNumbers(result, screenNum) { return result * screenNum }
function divideNumbers(result, screenNum) { return result / screenNum }

/* This function returns the result */
function operate(screenNum, result, operator) {
    if (typeof screenNum === `number` && result && operator) {
        if (operator === '10') return addNumbers(result, screenNum);
        else if (operator === '11') return subtractNumbers(result, screenNum);
        else if (operator === '12') return multiplyNumbers(result, screenNum);
        else if (operator === '13') return divideNumbers(result, screenNum);
    }
}

/* This function controls the display of the calculator's screen */
function populateDisplay(result = '', eraseScreenCondition = false) {
    if (eraseScreenCondition === true) SCREEN.textContent = result;
    else if (counter < 4) SCREEN.textContent += result;
}

/* Interacts when any calculator button is clicked */
BUTTONS_CONTAINER.addEventListener('click', e => {
    const TARGET_VALUE = e.target.value;
    if (TARGET_VALUE <= 13) {
        for (let i = 0; i <= 13; i++) {
            if (TARGET_VALUE <= 9) {
                populateDisplay(TARGET_VALUE);
                counter++;
                break;
            } else {
                screenNum = Number(SCREEN.textContent);
                result = roundAccurately(operate(screenNum, result, operator), 2);
                populateDisplay('', true);
                if (!result) result = screenNum;
                operator = TARGET_VALUE;
                counter = 0;
                break;
            }
        }
    } else if (TARGET_VALUE == 14) {
        screenNum = Number(SCREEN.textContent);
        result = roundAccurately(operate(screenNum, result, operator), 2);
        if (!isNaN(result)) {
            if (screenNum == 0 && operator == 13) result = 'undefined';
            populateDisplay(result, true);
            result = undefined;
            counter = 0;
        } else if (isNaN(result) && screenNum == 0 && operator == 13) {
            result = 'undefined';
            populateDisplay(result, true);
            result = undefined;
            counter = 0;
        }
    } else if (TARGET_VALUE == 15) {
        screenNum = undefined;
        result = undefined;
        operator = undefined;
        counter = 0;
        populateDisplay('', true);
    }
});