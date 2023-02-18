// Define a function `logBetween(lowNum, highNum)` that will print every number
// from `lowNum` to `highNum`, inclusive. Inclusive means that the range includes
// `lowNum` and `highNum`. Hint: this function only needs to print using `console.log`,
// it does not need to return.
//
// Examples:
// function logBetween(lowNum, highNum){
//     for (let i = lowNum; i <= highNum; i += 1){
//         console.log(i); 
//     }
// }

// console.log(logBetween(-1,2));
// console.log(logBetween(14,6));
// console.log(logBetween(4,6));


//
// logBetween(-1, 2); // prints
// -1
// 0
// 1
// 2
//
// logBetween(14, 6); // prints nothing
//
// logBetween(4,6); // prints
// 4
// 5
// 6
// logBetweenStepper
 //Write a function `logBetweenStepper(min, max, step)` that takes in 3 numbers as
// parameters. The function should print out numbers between `min` and `max` at `step`
// intervals. See the following examples.
// function logBetween(min, max, step){
//     for (let i = min; i <= max; i += step) {
//         console.log(i)
//     }
// }
// console.log(logBetween(5,9,1));
// console.log(logBetween(-10,15,5));



// Examples:
//
// logBetweenStepper(5, 9, 1) // prints
// 5
// 6
// 7
// 8
// 9
//
// logBetweenStepper(-10, 15, 5) // prints
// -10
// -5
// 0
// 5
// 10
// 15
//printFives
// Write a function `printFives(max)` that prints out the multiples of 5 that are
// less than max.
//
// Try to solve this in two ways, using a conditional (if) and without using a
// conditional
function printFives(max){
    for (let i = 0; i < max; i += 5) {
        console.log(i)
    }
}

console.log(printFives(34))

// Example:
//
// printFives(20) // prints
// 0
// 5
// 10
// 15
//printReverse
// Write a function `printReverse(min, max)` that print out all numbers from max
// to min (exclusive), in reverse order.
//
// Examples
function printReverse(min, max) {
    // let i = max;
    // let i = min;
    for (let i = max - 1; i > min; i -= 1) { // let => assignment, can only have = sign by itself
       console.log(i)
    }
}

console.log(printReverse(13, 18))

// printReverse(13, 18) // prints
// 17
// 16
// 15
// 14
//
// printReverse(90, 94) // prints
// 93
// 92
// 91
//sumNums
// Write a function `sumNums(max)` that returns the sum of all positive numbers less
// than or equal to max.
function sumNums(max){
    let sum = 0;// assign sum to 0 // let (assign) outside of for loop

    for (let i = 1; i <= max; i += 1){ // for loop begins here
        //console.log(i) // this is part of for loop- shows 1,2,3,4
        sum = sum + i; // new sum is reassign (=), 0(old sum) +i 
    } // for loop ends here - {}

    return sum
}
console.log(sumNums(4))
   
   

// Examples:
//
// sumNums(4); // => 10
// sumNums(10); // => 55
// sumNums(365); // => 66795

//isFactorOf
// Define a function `isFactorOf(number, factor)` that returns `true` if `factor`
// is a factor of `number`. `false` otherwise. A factor is a number that divides
// another number without a leftover remainder.
function isFactor(number,factor)
// Examples:
//
// isFactorOf(6,2); // => true
// isFactorOf(-6, 2); // => true
// isFactorOf(5,0); // => false
// isFactorOf(22, 7); // => false
//fizzBuzz
// Define a function `fizzBuzz(max)` that takes a number and prints  every number
// from 0 to `max` that is divisible by either 3 or 5, but not both.
//
// Examples:
//
//// fizzBuzz(20); // prints
// 3
// 5
// 6
// 9
// 10
// 12
// 18
//isPrime
// Define a function `isPrime(number)` that returns `true` if `number` is prime.
// Otherwise, false. Assume `number` is a positive integer.
//
// Examples:
//
// isPrime(2); // => true
// isPrime(10); // => false
// isPrime(11); // => true
// isPrime(9); // => false
// isPrime(2017); // => true
// Loop Muscle Memory
// Practice typing the syntax for loops! Type each snippet 5 times. Focus on using proper style and indentation. Be sure to test your code by running it after each repetition. You'll be surprised and also annoyed at what details you missed! Learn from those typos.

// //function printForwards(start, end) {
//   for (var counter = start; counter <= end; counter++) {
//     console.log(counter);
//   }
// }

// printForwards(4, 11); // feel free to change the numbers being passed
// function printBackwards(start, end) {
//   var i = end;
//   while (i >= start) {
//     console.log(i);
//     i--;
//   }
// }

// printBackwards(-5, 6); // feel free to change the numbers being passed
// // How will these programs evaluate?
// // Predict what will happen in the code below, and then run the code to find out!

// function func1(num) {
//   return num + 50;
// }

// function func2(num) {
//   return num + " bottles of beer on the wall";
// }

// function func3(num) {
//   var x = func1(num);
//   return func2(x);
// }

// var result = func3(5);
// console.log(result); // What does this print out?
// var foo = function(name) {
//   return "Dance " + name + ", dance! "
// }

// var bar = function() {
//   var str = "";

//   for (var i = 0; i < 3; i += 1) {
//     str += foo("Anthony");
//     str += foo("Haseeb");
//     str += foo("Winnie");
//     str += " | ";
//   }

//   return str;
// }

// var result = bar();
// console.log(result); // What does this print out?
// // Debug The Programs
// // The following functions don't give the expected output, can you spot the problems?

// function sayHiNTimes(n) {
//   var i = 0;

//   while (i < n) {
//     console.log("Hi");
//   }
// }
// function isFive(n) {
//   if (n = 5) {
//     return true;
//   } else {
//     return false;
//   }
// }
// // Truth Tables
// // Complete the tables and check your work in the REPL.

// // x	y	z	x && y || z	