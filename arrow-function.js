// function declare
function add(num1, num2){
    return num1 + num2;
}

//  function expression
const add2 = function add(num1, num2){
    return num1 + num2;
}
// function anonymous expression
const add3 = function (num1, num2){
    return num1 + num2;
}

// arrow function
const add4 = (num1, num2) => (num1 + num2);
const sum4 = add3(10, 2);
const sum3 = add3(34, 23);
const sum2 = add2(2, 2);
const sum = add(1, 2);

console.log(sum, sum2, sum3, sum4);
