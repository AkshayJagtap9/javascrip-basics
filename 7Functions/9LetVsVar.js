/*
// scope is limited using let keyword.(function scope variable)
function start(){
    for(let i = 0; i<5; i++)
    {
        console.log(i); //  0 1 2 3 4
    }   
    console.log(i);
}

start();
*/


//when we created var its scope is not limited its defned   (block scope varible)

function start(){
    for(var i = 0; i<5; i++)
    {
        console.log(i); //  0 1 2 3 4
    }   
    console.log(i);     //5
}

start();    // 0 1 2 3 4 5

//2
/*
function start(){
    for(var i = 0; i<5; i++)
    {
        if(true){
            var color = 'red';
        }
    }   
    console.log(color);     //red
}

start();    // red
*/
//3

function start(){
    for(let i = 0; i<5; i++)
    {
        if(true){
            var color = 'red';
        }
    }   
    console.log(color);     //Error
}

start();    //Error


//4

var color = 'red';      // when we create var as global on hat time var is set to window object
let age = 30;

function SayHi(){        // This is set to global function attached to window object.
    console.log('hi');
}

// Ex. In developer toolbar of console panel Window.sayHi()   o/p:hi

//conclusion : avoid usng var keyword bcz it create varible to function scope insted of block scope.
