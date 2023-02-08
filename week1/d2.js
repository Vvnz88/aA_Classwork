// console.log(isPrime(7))// calling isPrime - ""firstword lowercase, rest capital - camel casing 
// console.log(isPrime(6))
// console.log(isPrime(2))//t
// console.log(isPrime(1))//f
// console.log(isPrime(10))
// console.log(isPrime(2000))

let result = isPrime(7)
console.log(result)// true


function foo(){
    let str = "this is a test"
    return str // (need to have return to return something)
}


console.log(foo)// undefined, nothing is being return
// () after the foo - to invoke the function

function avg(num1, num2) {
    return (num1 + num2) / 2;
}

let avg2 = (num1, num2) => { // fat arrow takes the place of the word function
    return (num1 + num2) / 2;
}

let avg3 = (num1, num2) => (num1 + num2) / 2; // one line, implicit return//
//dont need the word return with fat arrow

let avg4 = function(num1, num2) {
    return (num1 + num2) / 2;
}


function nthPrime(n) {
    let count = 0;

    for (let i = 2; count <= n; i++) {

        if (isPrime(i)) {
            count += 1;
        }

        if (count === n) {
            return i;
        }
    }
}

function isPrime(num) { // calling isPrime"""
    if (num < 2) return false 

    for(let i = 2; i < num; i++) {
        if (num % i === 0){
            return false 
        }
    }

    return true;
}

console.log(nthPrime(3))
console.log(nthPrime(1))
console.log(nthPrime(5))
console.log(nthPrime(10))
console.log(nthPrime(30))