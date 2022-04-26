// javascript is dynamic lang so type of variabel is change at runtime
let selectedColours = ['red', 'blue'];
console.log(selectedColours);
console.log(selectedColours[0]);    

selectedColours[2] = 'green';
console.log(selectedColours);


selectedColours[3] = 55;
console.log(selectedColours);

// arrays is an object in javascript
console.log(typeof selectedColours);        //object


console.log(selectedColours.length);        