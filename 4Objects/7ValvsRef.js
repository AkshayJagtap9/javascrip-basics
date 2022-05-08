// let x = 10;
// let y = x;

// x = 20;

// x.value = 20;

// console.log(x); //20
// console.log(y); //10

// OR

let x = {value:10};
let y = x;

x.value = 20;

console.log(x); //{ value: 20 }
console.log(y); //{ value: 20 }

// OR

let number = 10;

function increase(number){
    number ++; 
}

increase(number);
console.log(number);    //10

//OR
let obj ={value : 10} ;

function increase(obj){
    obj.value ++; 
}

increase(obj);
console.log(obj);    //{ value: 11 }




 