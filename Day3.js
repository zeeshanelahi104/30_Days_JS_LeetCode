//Solution # 1
function expect(val) {
    return {
        toEqual: function(expected) {
            if (val === expected) {
                console.log("Pass");
            } else {
                console.error(`Fail: Expected ${expected}, but got ${val}`);
            }
        },
        toBe: function(expected) {
            if (val === expected) {
                console.log("Pass");
            } else {
                console.error(`Fail: Expected ${expected}, but got ${val}`);
            }
        }
    };
}


//Solution # 2

// var expect = function(val) {
//     const throwError = (errorString) => {throw new Error(errorString)}
//     return {
//     toBe: (val1) => val1 === val || throwError('Not Equal'),
    
//     notToBe: (val2) => val2 !== val || throwError('Equal')
//     }
//    };
// Example usage:
expect(5).toEqual(5); // Pass
expect("hello").toEqual("hello"); // Pass
expect(10).toEqual(20); // Fail: Expected 20, but got 10

expect(5).toBe(5); // Pass
expect("hello").toBe("hello"); // Pass
expect(10).toBe(20); // Fail: Expected 20, but got 10


