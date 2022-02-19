function add(num1, num2 = 12) {
    // option 1

    // if (num2 == undefined){
    //     num2 = 0;
    // }

    // option2

    // num2 = num2 || 0;

    const total = num1 + num2;
    return total;
}
const result = add(12, 45);
console.log(result);


function fullName(first, second = 'Bhuiyan'){
    const name = first + ' ' + second;
    return name;
}
const sheIs = fullName('fatema')
console.log(sheIs);
