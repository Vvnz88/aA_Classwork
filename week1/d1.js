console.log("hello");
//this is a comment

console.log(10 > 10)
console.log(10 >= 10)
console.log(10 < 11)
console.log(10 <= 10)
console.log(10 === 10)
console.log(0 === -0)
console.log(false !== true)
console.log([] === [])
console.log(10 == "10")
console.log(10 === "10")
let str = 'hel'
// inside quotation is string; [] square bracket
console.log(str[str.length -1])// str.length = 5, 5 -1 = 4 (telling you the index which is 4 of hello which is o ) "just minus"
console.log(str.indexOf ("l")) // index starts at 0, so l in hello is 2
console.log(str.indexOf ("llo"))
console.log(str.indexOf ("x"))
console.log(str + "  world")
console.log(str.concat ("  world"))
console.log(str)
console.log(4 - "hi")
console.log(4 * "hi")
console.log(4 * "10")
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.slice());// duplicate the whole string
console.log(str.slice(1));//1 means index of 1, from there on
console.log(str.slice(2, 4));// first argument is inclusive, second is exclusive(up to index of 4 not including 4)
if (str.length > 3){
     console.log("greater than 3");
} else if (str.length === 3) {
    console.log('3@!!@!@!')
} else{// catch all - defintely run something 
    console.log("less than 3"); 
}
