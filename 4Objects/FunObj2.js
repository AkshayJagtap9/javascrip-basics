function Circle(radius);
this.radius = radius;
this.draw = function() {
console.log('draw');    
}


const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function(){
    console.log(draw);
    const another = new Circle(1);
}
`);

//circle.constructor

const circle = new Circle1(1);
const another = new Circle(1);