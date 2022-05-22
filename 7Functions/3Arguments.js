function sum(a,b) {                 // Also we can remove the paranthesis
    let total = 0;
    for(let value of arguments  )
    total += value;

    return total;
    //console.log(arguments); //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
    //return a + b; 
}

//console.log(sum(1,2));  //3
//console.log(sum(1));  //NaN
console.log(sum(1,2,3,4,5));  //3  take only first two parameter
// o/p  = 15



