// 5
var age = 35; // try different numbers here


if (age > 30) { // >
  console.log('older than 30');// 
} else { // < ==
  console.log('younger than 30');// 
}
// 6
var str = 'pizza'; // try different strings here

if (str.length > 10) {
  console.log('long string');
} else {
  console.log('short string');// short string 
}


if (str[0] === 'p') {
  console.log('starts with p');
}
// 7 // p 

var num = 15; // try different numbers here

if (num % 3 === 0) {
  console.log('divisible by 3');//true/ divisible by 3/ stops here
} else if (num % 5 === 0) {
  console.log('divisible by 5');// false- wont print out/wont even look at it
}
// 8


var num = 15; // try different numbers here

if (num % 3 === 0) {
  console.log('divisible by 3'); // divisible by 3
}
if (num % 5 === 0) {
  console.log('divisible by 5'); // divisible by 5
}
// 9
var str = 'App AcademY'; // try different strings here

if (str[0] === str[0].toUpperCase()) {
  console.log('starts with a capital!');
}
if (str[str.length - 1] === str[str.length - 1].toUpperCase()) {
  console.log('ends with a capital!');
}
// 10
var num = -44; // try different numbers here

if (num > 0) {
  console.log('positive');
} else if (num < 0) {
  console.log('negative');
} else {
  console.log(0);
}
if (num % 2 === 0) {
  console.log('even');
} else {
  console.log('odd');
}