// for in loop 
const person = {
    name: 'Mosh',
    age: 30
};

// for(let key in person)
// {
//     console.log(key);       
// }

//  name
//  age

for(let key in person)
{
    console.log(key, person[key]);
}

// name Mosh
// age 30 

const colours = ['red', 'green', 'blue'];

for(let index in colours){
    console.log(index);    
}
// 0                    
// 1
// 2

for(let index in colours){
    console.log(index, colours[index]);    
}

// 0 red
// 1 green
// 2 blue
