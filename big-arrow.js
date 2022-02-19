const add = (num1, num2) => num1 + num2;
const sum = add(12, 34)

const multiply = (num1, num2) => num1 * num2;
const result = multiply(12,23)

const fiveTimes = num => num * 5
const value = fiveTimes(25);

const tenTimes = (num) => num * 10
const tenValue = tenTimes(23);

const getName = () => 'luis nar'
const name = getName();

const doMath = (x, y) => {
    const sum = x + y;
    const difference = x - y;
    const result = sum * difference;
    const out = result * 3;
    return out;
}
const total = doMath(8, 7);


console.log(sum, result, value, tenValue, name, total);