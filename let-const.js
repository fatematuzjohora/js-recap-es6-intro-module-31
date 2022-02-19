const number = [23, 26, 27, 28, 29, 30, 31, 32,45, 67, 87, 54, 32,];

// number = [23, 98]; new assign not allowed.

number.push(125);
number[1] =54;

let sum = 0;
for(let i = 0; i<number.length; i++) {
    const numbers = number[i];
    console.log(numbers);
    sum = sum + numbers;
}


const student = {roll: 1, name: 'Ayra', id: 23451, age: 19};
student.roll = 5;
