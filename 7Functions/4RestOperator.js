function sum(...args){
    console.log(args);
}

console.log(sum(1,2,3,4,5,10)); //[ 1, 2, 3, 4, 5, 10 ]

function sum(...args){
    //return args.reduce((a,b) => a + b);       //25
    console.log(args);
}

console.log(sum(1,2,3,4,5,10));     //[ 1, 2, 3, 4, 5, 10 ]             // output is real array


                //OR
/*
function sum(args){
    console.log(args);
}         
console.log(sum(1,2,3,4,5,10));     //1

*/


/*
function sum(discount, ...prices){
    const total =  prices.reduce((a,b) => a + b);
    return total * (1 - discount);      //45
}
console.log(sum(0.1, 20, 30));

*/

/*

function sum(discount, ...prices, someValue){
    const total =  prices.reduce((a,b) => a + b);
    return total * (1 - discount);      //45
}
console.log(sum(0.1, 20, 30, 1));

op: Error : Rest parameter must be last formal parameter.
*/


