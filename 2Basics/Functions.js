
function greet(){
    console.log('Hello World');
}

greet();


// parameterized function

function paraName(name){        // Parameter
    console.log('Hello ' + name);
}

paraName('Akshay');         // Argument
paraName('Ak');         // Argument


function paraFullName(name, lastname){        // Parameter
    console.log('Hello ' + name + ' ' + lastname);
}

paraFullName('Akshay');         // Argument
paraFullName('Akshay', 'Jagtap');         // Argument

// calculate the values
function square(number){
    return number * number;
}

let ans = square(2);
console.log(ans);       //4
console.log(square(3));       //9
