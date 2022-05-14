// removing all element from the array

let numbers = [1, 2, 3, 4];
let another = numbers;

//solution 1
numbers = [];
console.log(numbers);       //[]

console.log(another);       //[ 1, 2, 3, 4 ]

//solution 2

numbers.length = 0;
console.log(another);       //[]

//solution 3
numbers.splice(0, numbers.length);
console.log(another);       //[]

// solution 4   // not recomoded
while(numbers.length > 0)
numbers.pop();