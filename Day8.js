// Define the compose function
var compose = function(functions) {
    return function(val) {
        if (functions.length === 0) return val;
        for (var i = functions.length - 1; i >= 0; i--) {
            val = functions[i](val);
        }
        return val;
    };
};

// Example 1:
const fn1 = compose([x => x + 1, x => x * x, x => 2 * x]);
console.log(fn1(4)); // Output: 65

// Example 2:
const fn2 = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
console.log(fn2(1)); // Output: 1000

// Example 3:
const fn3 = compose([]);
console.log(fn3(42)); // Output: 42
