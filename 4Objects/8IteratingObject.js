// Iterating an object 
// object is not iterating for of loop its only iterating of in loop

const circle = {
    radius: 1,
    draw(){
        console.log('draw');
    }
};

for(let key in circle){
    console.log(key);
}

// radius
// draw

for(let key in circle){
    console.log(key, circle[key]);
}

// radius 1
// draw [Function: draw]

/*
for( let key of circle)
{
    console.log(key);       //error
}
*/

for( let key of Object.keys(circle))
{
    console.log(key);       
}
// radius
// draw

for(let entry of Object.entries(circle))
{
    console.log(entry);
}
// [ 'radius', 1 ]
// [ 'draw', [Function: draw] ]

if('radius' in circle) console.log('yes');

