// Define the custom reducer function
var reduce = function(nums, fn, init) {
    if(nums.length === 0) return init;
    let res = init;
    for(let i = 0; i < nums.length; i++){
        res = fn(res, nums[i]);
    }
    return res;
};

// Example usage:
const nums1 = [1, 2, 3, 4];
const fn1 = function sum(accum, curr) { return accum + curr; };
const init1 = 0;
console.log(reduce(nums1, fn1, init1)); // Output: 10

const nums2 = [1, 2, 3, 4];
const fn2 = function sumOfSquares(accum, curr) { return accum + curr * curr; };
const init2 = 100;
console.log(reduce(nums2, fn2, init2)); // Output: 130

const nums3 = [];
const fn3 = function alwaysZero(accum, curr) { return 0; };
const init3 = 25;
console.log(reduce(nums3, fn3, init3)); // Output: 25
