const SCREEN = document.getElementById('screen');

/* Operations functions */
function addNumbers(result, screenNum) { return result + screenNum }
function subtractNumbers(result, screenNum) { return result - screenNum }
function multiplyNumbers(result, screenNum) { return result * screenNum }
function divideNumbers(result, screenNum) { return result / screenNum }

/* This function returns the result */
function operate(screenNum, result, operator) {
    if (screenNum && result && operator) {
        if (operator === '10') return addNumbers(result, screenNum);
        else if (operator === '11') return subtractNumbers(result, screenNum);
        else if (operator === '12') return multiplyNumbers(result, screenNum);
        else if (operator === '13') return divideNumbers(result, screenNum);
    }
}

/* This function controls the display of the calculator's screen */
function populateDisplay(result = '') {
    SCREEN.textContent = result;
}