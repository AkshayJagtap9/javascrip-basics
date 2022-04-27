let a = 'red';
let b = 'blue';

console.log('A' + a);
console.log('B' + b);


let c = a;
a = b;
b = c;

console.log('A = ' + a);
console.log('B = ' + b);
