
// let nums = [1, 2,3,4,5];

// function pairs(nums) {
//     let res = [];
//     console.log(nums)
//     for (let i = 0; i < nums.length; i += 1) {
//         let num1 = nums[i];
//         for (let j = 0; j < nums.length; j +=1) {
//             let num2 = nums[j];
//             res.push([ num1, num2 ]);
//              //console.log(`num1 = ${num1}`); 
//              //console.log(`num2 = ${num2}`);
//         }
//      }
//      return res;
//  }

// console.log(pairs(nums));
/////////////////////////
// let nums = [1, 2,3,4,5];

// function pairs(nums) {
//     let res = [];
//     console.log(nums)
//     for (let i = 0; i < nums.length; i += 1) {
//         let num1 = nums[i];
//         for (let j = i; j < nums.length; j +=1) {
//             let num2 = nums[j];
//             res.push([ num1, num2 ]);
//             // console.log(`num1 = ${num1}`); 
//             // console.log(`num2 = ${num2}`);
//         }
//     }
//     return res;
// }

// console.log(pairs(nums));

///////////////////
// let nums = [1, 2,3,4,5];

// function pairs(nums) {
//     let res = [];
//     //console.log(nums)
//     for (let i = 0; i < nums.length; i += 1) {
//         let num1 = nums[i];
//         for (let j = i + 1; j < nums.length; j +=1) {
//             let num2 = nums[j];
//             res.push([ num1, num2 ]);
//             // console.log(`num1 = ${num1}`); 
//             // console.log(`num2 = ${num2}`);
//         }
//     }
//     return res;
// }

// console.log(pairs(nums));

// ///////////////////
 let matrix = [ 
    [1,2,3],
    [4,5,6],
    [7,8,9]
 ];


for (let i = 0; i < matrix.length; i ++) {
    console.log(matrix[i]);// each ele
    for (let j = 0; j < matrix[i].length; j+= 1) {
        console.log(matrix[i][j])
    }
}

















