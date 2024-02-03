# Understand the problem

- Make `Basic operations` functions.
- Create three variables: `num1`, `num2` & `operator`. Those will be used to update the display.
- Create `operate` function that takes three variables and calls one of the `Basic operations` functions.
- Create a `populateDisplay` function and store the `display value` in a variable.
- **To make the calculator work:**
>
>   1. Store the first number.
>   2. Store the second number.
>   3. Utilize the operator.
>   4. `operate` on the two numbers when the user presses the `=` key.
>   5. Once `operate` has been called, update the display with the solution.
>
- User can chain operations like: 12 + 7 - 5 * 3 = 42.
- **( 12 + 7 - )**
>   1. Evaluate (12 + 7).
>   2. Display the result (19).
>   3. Use (19) as the first number in your new calculation, along with the next operator (-).
- Round answers with long decimals.
- `Clear Button` clears any data and the display.
- Pressing `=` before entering any numbers is prohibited (`removeEventListener`).
- Display an error if the user tries to divide by 0.

# Plan

## Inputs
>
>   1. Numbers.
>   2. Operators.
>   3. Equal Sign.
>   4. Clear Button.
>
## Desired Output
>
>   Calculated operations.
>
## Steps

**Problem:** 12 + 7 - 5 = 42

**Input:** The user clicks on the `1` button.
>
>   - An `addEventListener` attached to the `buttons-container` catches the event `click` while bubbling.
>       - Get the `e.target.value`.
>       - Enters an `if (e.target.value <= 13)`, if `true`: Enter the loop.
>           - Enters a `for loop` that initiates `i = 0` and ranges to `i <= 13`.
>               - Enters an `if statement` that checks whether the `target.value` (`string`) <= 9.
>                   - If `true`: Then `e.target` is an operand button
>                   - Call the `populateDisplay` function.
>                   - `break` from the loop.
>   - The end of the event.
> 
**Input:** The user clicks on `2` button. (SAME AS `1` BUTTON)

**Input:** The user clicks on `+` button.
>
>   - An `addEventListener` attached to the `buttons-container` catches the event `click` while bubbling.
>       - Get the `e.target.value`.
>       - Enters an `if (e.target.value <= 13)`, if `true`: Enter the loop.
>           - Enters the same `for loop` that initiates `i = 0` and ranges to `i <= 13`. (Operators are from 10 to 13)
>               - Enters the `else if` that checks whether the `e.target.value` (`string`) <= 13.
>                   - If `else if` is `true`: Then `e.target` is an operator button.
>                   - Assign the number on the screen to `screenNum` variable. (`screenNum == 12`)
>                   - Calls `operate` function and assign its return value to `result`.
>                       - Returns `undefined` to `result` variable. (Since the `operate` function prevents any operations without the three variables being given with an `if statement`)
>                   - Calls `populateDisplay` function without an argument. (Default parameter is `''`)
>                   - Assign the value of `screenNum` to `result`: `if (!result) result = screenNum;`. (`result == 12`)
>                   - Assign `+` to `operator` variable. (`operator == +`)
>   - The end of the event.
>
**Input:** The user clicks on `7` button. (SAME AS `1` BUTTON)

**Input:** The user clicks on `-` button.
>
>   - An `addEventListener` attached to the `buttons-container` catches the event `click` while bubbling.
>       - Get the `e.target.value`.
>       - Enters an `if (e.target.value <= 13)`, if `true`: Enter the loop.
>           - Enters the same `for loop` that initiates `i = 0` and ranges to `i <= 13`. (Operators are from 10 to 13)
>               - Enters the `else if` that checks whether the `e.target.value` (`string`) <= 13.
>                   - If `else if` is `true`: Then `e.target` is an operator button.
>                   - Assign the number on the screen to `screenNum` variable. (`screenNum == 7`)
>                   - Calls `operate` function and assign its return value to `result`. (Now we have `screenNum == 7` & `result == 12` & `operator == +`)
>                       - Returns `19` to `result` variable. (`result == 19`)
>                   - Calls `populateDisplay` function without an argument. (Default parameter is `''`)
>                   - Assign `-` to `operator` variable. (`operator == -`)
>   - The end of the event.
>
**Input:** The user clicks on `5` button. (SAME AS `1` BUTTON)

**Input:** The user clicks on `=` button.
>
>   - An `addEventListener` attached to the `buttons-container` catches the event `click` while bubbling.
>       - Get the `e.target.value`.
>       - Enters `else if (e.target.value == 14)`.
>           - If `else if` is `true`: Then `e.target` is `=` button.
>           - Assign the number on the screen to `screenNum` variable. (`screenNum == 5`)
>           - Calls `operate` function and assign its return value to `result`. (Now we have `screenNum == 5` & `result == 19` & `operator == -`)
>               - Returns `14` to `result` variable. (`result == 14`)
>           - Calls `populateDisplay` function with `result` as an argument.
>           - Assign `result = undefined`. (so that if the user decides to continue to evaluate a new calculation using the result, it won't evaluate a false number due to `result` having a value)
>   - The end of the event.
>