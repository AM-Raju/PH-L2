/* Function */
/* Normal Function */
function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

/* Arrow function */
const multiply = (num1: number, num2: number): number => num1 * num2;

/* Method */
const poorUser = {
  name: "Raju",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is ${this.balance + balance}`;
  },
};

// Making output of map typeSafe
const arr: number[] = [1, 4, 10];

const newArr = arr.map((num: number): number => num * num);
