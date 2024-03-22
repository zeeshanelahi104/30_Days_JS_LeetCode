function createCounter(n) {
    let count = n; // Initialize count with n
    
    // Define the inner counter function
    function counter() {
        // Return the current count and then increment it
        return count++;
    }
    
    // Return the counter function
    return counter;
}

// Example usage:
const counter = createCounter(5);
console.log(counter()); // Output: 5
console.log(counter()); // Output: 6
console.log(counter()); // Output: 7
console.log(counter()); // Output: 8
