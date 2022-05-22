// In function declaration function call is alloweed on top BUT not in function expression
// function hoistin == at the time function call line no5 function defenation go to top is called hoaistiong.
// Function declaration

walk(); // walk

function walk(){
    console.log('walk');
}


// Function expression
/*
    run();  //  Error

let run = function walk() {
    console.log('run');
};
*/

// similar as using varible or constant before it is define
/*
console.log(x);
let x = 1;
*/