// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// R = 00000001

//Read, Write,  Execute

console.log(1 | 2); //Bitwise OR
console.log(1 & 2); //Bitwise AND

//access control system for bitwise operator
const readPermission = 4;
const wirtePermission = 2;
const executtePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | wirtePermission
let message = myPermission | readPermission | wirtePermission

message = (myPermission & readPermission) ? 'yes' : 'no'

console.log(myPermission);

console.log(message);