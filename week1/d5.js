isInside
// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf
//
// isInside(['chase', 'phi', 'eliot'], 'eliot'); // => true
// isInside(['chase', 'phi', 'eliot'], 'fred'); // => false

function isInside(array, ele){
    // indexOf() if it finds it return index
    // but it if doesnt it returns -1

    if (array.indexOf(ele) !== -1) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isInside(['chase', 'phi', 'eliot'], 'eliot'))
console.log(isInside(['chase', 'phi', 'eliot'], 'fred'))

/////////////////
// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
function reverseStr(str) {
    let result = "";// check this

    for (let i = str.length -1; i >= 0; i -= 1 ){
        console.log("i: " + i);
        console.log("prev result: " + result);
        result = result + str[i];//check this // reassigning string -very important
        console.log("after reassign result: " + result);
        console.log("================");
    }
    
    return result;
}
// Examples:
//
 reverseStr('bootcamp'); //=> 'pmactoob'
// reverseStr('App Academy'); //=> 'ymedacA ppA'