const circle = {
    radius: 1,
    draw(){
        console.log('draw');
    }
};

//old approch
/*
const another = {};
for(let key in circle ){
    another[key] = circle[key];
}
*/
//console.log(another);   //{ radius: 1, draw: [Function: draw] }

//empty object{}
/*
const another = Object.assign({}, circle);
console.log(another);      //{ radius: 1, draw: [Function: draw] }
*/

//existing object
/*
const another = Object.assign({
    color:'yellow'
}, circle);
console.log(another);
*/ 
// /{ color: 'yellow', radius: 1, draw: [Function: draw] }


//letest and easy approch.
const another = {...circle};
console.log(another);
//{ radius: 1, draw: [Function: draw] }