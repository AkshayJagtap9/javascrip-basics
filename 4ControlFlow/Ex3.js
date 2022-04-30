/* very femous interview question of fizzbuzz
Divisible by 3 ==> Fizz
Divisible by 3 ==> Bizz
Divisible by both 3 and 5 ==> FizBizz
Not Divisible by 3 and 5 ==> input
Not a number ==> 'Not a Number' */

const output = fizzBuzz(7);
console.log(output);

function fizzBuzz(input){
    if(typeof input !== 'number')
    return 'Not a number';
    
    if((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz';
    
    if(input % 3 === 0)
    return 'Fizz'

    if(input % 5 === 0)
    return 'Buzz'
    

    return input;
    
}

//7