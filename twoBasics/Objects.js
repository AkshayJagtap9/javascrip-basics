
let person = {
    name: 'Akshay ',
    age:30
};

console.log(person);

//Dot notation 
console.log(person.name);
console.log(person.age);
person.name = 'Ak';     // change name Akshay to Ak 
console.log(person.name);

//Bracket Notation
person['name'] = 'Akshay' // change name  Ak to  Akshay
console.log(person.name);

let selection = 'age';
person[selection] = 27;
console.log(person.age);




