const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
];
/*
const course = courses.find(function(course) {
    return course.name === 'a'
});
*/

// console.log(course);    //{ id: 1, name: 'a' }

            //OR
/*            
just remove function keyword and add arrow
const course = courses.find((course) => {
     return course.name === 'a'
}); /*

//console.log(course);    //{ id: 1, name: 'a' }

            //OR
/*            
just remove parenthesis of course  
const course = courses.find(course => {
    return course.name === 'a'
});
*/      

//console.log(course);    //{ id: 1, name: 'a' }

            //OR
// code is single line    
const course = courses.find(course => course.name === 'a');    
console.log(course);        //{ id: 1, name: 'a' }