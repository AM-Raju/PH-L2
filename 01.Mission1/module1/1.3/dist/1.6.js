"use strict";
/* Function */
/* Normal Function */
function add(num1, num2 = 10) {
    return num1 + num2;
}
/* Arrow function */
const multiply = (num1, num2) => num1 * num2;
/* Method */
const poorUser = {
    name: "Raju",
    balance: 0,
    addBalance(balance) {
        return `My new balance is ${this.balance + balance}`;
    },
};
// Making output of map typeSafe
const arr = [1, 4, 10];
const newArr = arr.map((num) => num * num);
