//Solution # 1
// var createCounter = function(init) {
//     let tempVal = init;
//     function increment(){
//     tempVal++;
//     return tempVal;
//     };
//     function reset(){
//     tempVal = init;
//     return tempVal;
//     };
//     function decrement(){
//     tempVal--;
//     return tempVal;
//     };
//     return {
//     increment,
//     reset,
//     decrement,
//     }
//    };
 

//Solution # 2
   
//    var createCounter = function(init) {
//     let count =init;
   
//     function increment() {
//     return ++count;
//     }
   
//     function decrement() {
//     return --count;
//     }
   
//     function reset() {
//     count=init;
//     return count; 
//     }
   
//     return {
//     increment:increment,
//     decrement:decrement,
//     reset:reset
//     }
//    };
   
   
//Solution # 3

//    var createCounter = function(init) {
//     let initValue = init;
//     return {
//     increment() {
//     return ++initValue;
//     },
//     decrement() {
//     return --initValue;
//     }, 
//     reset() {
//     initValue = init;
//     return init;
//     }
//     }
//    };
   
//Solution # 4
   var createCounter = function(init) {
   let count = init
   return{
    increment: () => ++count,
    reset: () => count = init,
    decrement: () => --count
    }
   };



// Using the fourth implementation
const counter4 = createCounter(100);
console.log(counter4.increment()); // Output: 101
console.log(counter4.reset());     // Output: 100
console.log(counter4.decrement()); // Output: 99
