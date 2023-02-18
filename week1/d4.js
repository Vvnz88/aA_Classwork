let arr1 = ["h","e", "l", "l", "o"];
// // let str = "hello";

// // console.log(arr);
// // console.log(str);

// // arr[0]= "x";
// // str[0]= "x";

// // console.log('-------------')

// // console.log(arr);// mutable
// // console.log(str); //mutability - immutable

let arr = [0, null, undefined, 'test', false, ['a', 'b']]//elements in arr

console.log(arr);
console.log(arr[5]);
console.log(arr[5][1]);
console.log(arr[3][2]);
console.log(arr.indexOf(false));//  4 (position 4)
console.log(arr.indexOf(true));// -1  ( there's no true)

// //Mutating methods
// let fruits = ['apple', 'pear', 'peach', 'pineapple'];
// console.log(fruits)
// fruits.push('watermelon');// push/ add to end
// console.log(fruits)

// fruits.pop()// remove the end 
// console.log(fruits)

// fruits.shift();// remove the front
// console.log(fruits);

// // fruits.unshift('banana');//add to the front
// // console.log(fruits);

// //non mutating methods
// console.log(fruits.slice());// slice given a copy when no argument
// console.log(fruits.slice(2))// slice from peach on 
// console.log(fruits.slice(1,3))// starts at 1, not including 3
// // when given 2 arguments (inclusive, exclusive)
// console.log('-------');// .slice is nonmutating

// console.log(fruits);
// let arr2 = [1,2,3,4];
// console.log(fruits.concat(arr2));
// console.log(fruits);

// console.log('--------------')
// let fruits2 = fruits.slice(1, 3);
// console.log(fruits2) // only wants 1, 3, since fruits2 are assigned

//  let fruitsStr = fruits.join('++');// .join turn array into string
// console.log(fruitsStr);// join with a space before/ or ++

// let fruitsArr = fruitsStr.split('++'); // .split turn str into array
// console.log(fruitsArr);// 

// function fruitLoop(fruit){
//     for (let i = 0; i <= fruit.length - 1; i += 1){
//         console.log(fruit[i]);
//     }
// }

// fruitLoop(fruitsArr);

