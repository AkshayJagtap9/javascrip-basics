// finding element of an array
// all the below method second parameter which is optional is starting index
const numbers = [1, 2, 1, 3, 4];

// finding element from start
console.log(numbers.indexOf('a'));      //-1
console.log(numbers.indexOf(1));      //0
console.log(numbers.indexOf('1'));      //-1

// finding element from end
console.log(numbers.lastIndexOf(1));      //2

// if element is present in array return true
console.log(numbers.indexOf(1) !== -1);     //true
console.log(numbers.includes(1));       //true

// second parameter which is finding element from that index
console.log(numbers.indexOf(1, 2));      //2