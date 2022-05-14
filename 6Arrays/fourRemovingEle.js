// removing element from array

const numbers = [1, 2, 3, 4];

// END

const last = numbers.pop();
console.log(numbers);       //[ 1, 2, 3 ]
console.log(last);          //4        

// Begining
const bigi = numbers.shift();
console.log(numbers);       //[ 2, 3,]
console.log(bigi);      //1

// MIDDLE
const mid = numbers.splice(1, 1);
//first parameter is index number and second parameter is how many element you want to delete
console.log(numbers);       //[ 2 ]
console.log(mid);           // [3]