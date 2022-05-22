// Function declaration

function walk(){
    console.log('walk');
}


//named function expression

let run = function walk() {
    console.log('run');
};

run();  //run


// Anonymous function expression

/*
let run = function(){
    console.log('run');
};
let move = run;
run();      //run
move();     //run
*/