// //laligatSum
// function isPrime(num) {
//     if (num < 2) return false;

//     for (let i = 2; i < num; i += 1) {
//         if (num % i === 0) return false;
//     }

//     return true; 
// }
       
// console.log(laligatSum(10))
// console.log(laligatSum(11))

// function laligatSum (num) {
//     let sum = 0;

//     for (let i = 2; i <= num; i += 1) {
//         if(isPrime(i)){
//             sum += i;
//         }
//     }

//     return sum;
// }
//object

let car = { "make" : "toyota", "model" : "camry",
            "year" : 2017,     "doors": 2 }

            //console.log(car["make"]);// toyota
            //console.log(car.model);// camry
            
            car["tires"] = 27;
            car.color = "blue";
            console.log(car);

            console.log(car["sport"])

            for (let key in car) {
                //console.log(key)
                //console.log(car[key]);// [key] vs. ["make"] ...[key] only in for loop
                console.log(car.key);// key is a var //undefined ....car.make or car.model
            }

            let test = "model"
            console.log(car[test]);// camry


































