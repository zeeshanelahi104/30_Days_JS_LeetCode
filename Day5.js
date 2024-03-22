function applyMapping(arr, fn) {
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        result[i] = fn(arr[i], i);
    }
    
    return result;
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const mappingFunction = (value, index) => value + index;
const transformedArray = applyMapping(arr, mappingFunction);
console.log(transformedArray); // Output: [1, 3, 5, 7, 9]
