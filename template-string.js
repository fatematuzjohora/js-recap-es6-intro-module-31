// const multiLine = 'this is my first line. \n' + 
// 'this id my second line. \n' + 'this is my third line. \n' + 'this is my fourth line. \n';

// \n = breakline

const multiLineNew = `this is first
this is second
this is third
this is fourth`
// console.log(multiLineNew);

const friends = ['ayesa', 'khadija', 'nur', 'humayra', 'mariyam']
const count = 5
const old = '<h3 class="friend-name">friend-4</h3>'
const old2 = '<h3 class="friend-name">friend-' + count + '</h3>'
// const new1 = `<h3 class="friend-name">friend-${count}</h3>`;
const new1 = `<h3 class="friend-name">friend-${friends.length}</h3>`;


const first = 'Fatema';
const last = 'Chowdhury'
const fullOld = first + ' ' + last;
const fullNew = `this person name is : ${first} ${last}. her money ${friends.length * 5000}. she lives in Dhaka`;

console.log(fullNew);
