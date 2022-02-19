const numbers = [12, 23, 45, 67, 93]
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(12, 34, 67);
const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);

const number2 = [22, ...numbers, 88];
numbers.push(55);
console.log(number2);