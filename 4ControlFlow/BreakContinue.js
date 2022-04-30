// Ex .1

let i = 0;
while(number <= 10){
    if(number === 5) break;
    console.log(number);
    number++;
}

// 0
// 1
// 2
// 3
// 4

// Ex 2
let i = 0;
while(number <= 10){
    if(number % 2 === 0){
    number++;
    continue;
    }
    console.log(number);
    number++;
}

// 1
// 3
// 5
// 7
// 9
