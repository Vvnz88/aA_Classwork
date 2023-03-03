function sayHello(n){
    if (n === 0.5) return 
    console.log('hello');
    console.log(n);
    sayHello(n-1);
}

//sayHello(5);

function multiply(num1, num2) {
    //console.log (num2)// 4(the first time),3,2,1,0
    if(num2 === 0) return 0;// base case// to stop recursive step
    return num1 + multiply(num1, num2 -1)// recursive step
}
//console.log(multiply(3,4)) // 12

function fib(n) { // 
    if (n === 1 || n === 2) {
        return 1;
    }
    let answer = fib(n-1) + fib(n -2);// 
    return answer;
}
console.log(fib(2));//1
console.log(fib(5));//5


function maxAdjacentSum(array) {
    let bigResult = 0;
    
    for (let i = 0; i < array.length-1; i++) {
        let sum = array[i] + array[i +1];
        if(sum > bigResult) bigResult = sum;
    }
    return bigResult;
}
var arr2 = [5, 6, 11, 3]
console.log(maxAdjacentSum(arr2));