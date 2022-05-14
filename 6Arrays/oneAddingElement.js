// Add element of end begining and middle of the array

const numbers = [3, 4];

console.log(numbers);       //[ 3, 4 ]

numbers.push(5, 6);     // add element at end
console.log(numbers);       //[ 3, 4, 5, 6 ]


numbers.unshift(1, 2);      // add element at begining

console.log(numbers);       //[ 1, 2, 3, 4, 5, 6 ]

numbers.splice(2, 0, 'a', 'b');
// first parameter is position of element to want to insert
// secont parameter is how many element you want to delete
// third parameter is adding element
console.log(numbers);       //[ 1, 2, 'a', 'b', 3, 4, 5, 6 ]