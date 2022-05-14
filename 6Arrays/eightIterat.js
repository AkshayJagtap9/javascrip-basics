const numbers = [1, 2, 3];
   
for(let number of numbers)
    console.log(number);

// numbers.forEach(function(number){
//     console.log(number);

// numbers.forEach((number)=>{
//     console.log(number);
// });

numbers.forEach(number=>{  console.log(number) });
// 1
// 2
// 3
// 1
// 2
// 3


numbers.forEach((number, index) =>{  console.log(index, number) });
// 0 1
// 1 2
// 2 3