// console.log("hello");
// //this is a comment

// console.log(10 > 10)
// console.log(10 >= 10)
// console.log(10 < 11)
// console.log(10 <= 10)
// console.log(10 === 10)
// console.log(0 === -0)
// console.log(false !== true)
// console.log([] === [])
// console.log(10 == "10")
// console.log(10 === "10")
// let str = 'hel'
// // inside quotation is string; [] square bracket
// console.log(str[str.length -1])// str.length = 5, 5 -1 = 4 (telling you the index which is 4 of hello which is o ) "just minus"
// console.log(str.indexOf ("l")) // index starts at 0, so l in hello is 2
// console.log(str.indexOf ("llo"))
// console.log(str.indexOf ("x"))
// console.log(str + "  world")
// console.log(str.concat ("  world"))
// console.log(str)
// console.log(4 - "hi")
// console.log(4 * "hi")
// console.log(4 * "10")
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.slice());// duplicate the whole string
// console.log(str.slice(1));//1 means index of 1, from there on
// console.log(str.slice(2, 4));// first argument is inclusive, second is exclusive(up to index of 4 not including 4)
// if (str.length > 3){
//      console.log("greater than 3");
// } else if (str.length === 3) {
//     console.log('3@!!@!@!')
// } else{// catch all - defintely run something 
//     console.log("less than 3"); 
// }

// =================================================
// homework
// =================================================

console.log(4 + 4 / 2) // = 4
console.log(4 + 4 / 2)
console.log((2 + -7) * 3) // = -15
// console.log
console.log(101 % 10) //= 1

console.log(12 - 4 % 3) //= 11

console.log(true && false) // = f

console.log(true && !(false || false)) // = true

console.log(!true && !(false || false)) // = false

console.log('cat' + 'dog') // catdog

console.log(2 + 'pizza') // 2pizza

console.log(2.5 * 'fish') // Nan

console.log(5 >= 11) // fasle

console.log(5 === 5.0) // true ***

console.log(7 !== 7.1) // true

console.log(5 + 5 > 8) //true

console.log(6 + 6 !== 12) // false

console.log(2 > 1 || false)// true

console.log('true' === true)// false

console.log(10 % 2 === 0) // true

console.log(21 % 2 === 0) // false //1

console.log(21 % 2 !== 0) // true

console.log(21 % 2 === 1) // true

console.log(12 % 3 === 0) // true

console.log(9 % 3 === 0) // true

console.log(14 % 3 === 0) // false // 2 

console.log('new york'[0]) // n

console.log('new york'[1])// e

console.log('san francisco'[2 * 3]) // r //a 

console.log('bootcamp'[3].toUpperCase()) // T

console.log('bootcamp'.indexOf('T')) // capital T doesnt exist means -1

console.log('bootcamp'.indexOf('camp')) //4 

console.log('bootcamp'.indexOf('o') > -1) // true

console.log('science'.indexOf('x') === -1) //undefined/ -1 here means not found - //true

/////////////////////////////////
//////////////////////////////////
// 1
var idx = 'abcde'.indexOf('D'); // .....-1
idx = idx + 11; //.......10

console.log(idx); // 10
console.log(idx * 2);// .....10
console.log(idx); // 10

// 2
var num = 33;
var isEven = num % 2 === 0; 
console.log(isEven); // false
console.log(!isEven); // True

// 3
var str1 = 'marker';
var num = 'whiteboard'.length - str1.length;// num is 4
console.log(num); // 4

var str2 = 'bootcamp';
console.log(str2[num].toUpperCase()); // C [] is index so C not T

var char = str2[num].toLowerCase(); // c
console.log(char + '!'); // c!

// 4
var sentence = 'welcome to bootcamp prep';// space count as length
var lastChar = sentence[sentence.length - 1]; 23
// sentence[23] = 

console.log(lastChar); // p
console.log(sentence.indexOf(lastChar)); // 18`