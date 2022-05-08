function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const another = new Circle(1);

// function internally look like this.
// const Circle1 = new Function('radius', `function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }`);


const circle = new Circle(1);
//const another = new Circle(1);

Circle.call({}, 1,2,3,4)