# Understand the problem

- Make `Basic operations` functions.
- Create three variables: `num1`, `num2` & `operator`. Those will be used to update the display.
- Create `operate` function that takes three variables and calls one of the `Basic operations` functions.
- Create a `populate display` function and store the `display value` in a variable.
- To make the calculator work:
    1. Store the first number.
    2. Store the second number.
    3. Utilize the operator.
    4. `operate` on the two numbers when the user presses the `=` key.
    5. Once `operate` has been called, update the display with the solution.
- User can chain operations like: 12 + 7 - 5 * 3 = 42.
- (12 + 7 -)
    1. Evaluate (12 + 7).
    2. Display the result (19).
    3. Use (19) as the first number in your new calculation, along with the next operator (-).
- Round answers with long decimals.
- `Clear Button` clears any data and the display.
- Pressing "=" before entering any numbers is prohibited (removeEventListener).
- Display an error if the user tries to divide by 0.

***

