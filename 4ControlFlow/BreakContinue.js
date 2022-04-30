// Ex .1

let i = 0;
while(i <= 10){
    if(i === 5) break;
    console.log(i);
    i++;
}

// 0
// 1
// 2
// 3
// 4

// Ex 2
let i = 0;
while(i <= 10){
    if(i % 2 === 0){
    i++;
    continue;
    }
    console.log(i);
    i++;
}

// 1
// 3
// 5
// 7
// 9
