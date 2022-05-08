// Camel notatoin: oneTwoThreeFour
// Pascal notation: OneTwoThreeFour
// this is reference of an object executing pice of code.


//Constructor function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(1);
//new operator creats 1)empty object like : const x = {} 2) set this property into object 3)new operator
// returns new object from above function
console.log(circle);

//Circle { radius: 1, draw: [Function (anonymous)] }
