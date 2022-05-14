// Dynamic nature of an object

const circle = {
    radius: 1
 };
// constant means we cannot reassign that variable.

// circle = {};    --> not alloweed



 console.log(circle);   //{ radius: 1 }

 circle.color = 'yellow';

 console.log(circle);   //{ radius: 1, color: 'yellow' }

 circle.draw = function () {
     console.log('draw method:');
 }

 console.log(circle);   // { radius: 1, color: 'yellow', draw: [Function (anonymous)] }

 delete circle.color;
 delete circle.draw;

 console.log(circle);   //{ radius: 1 } 