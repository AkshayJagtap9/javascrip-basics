/*
const person = {
    firstName : 'Akshay',
    lastName : 'Jagtap'
};

console.log(person.firstName + ' ' + person.lastName);  //Akshay Jagtap
            //OR
console.log(`${person.firstName} ${person.lastName}`);  //Akshay Jagtap
            
/*

        // When we write function inside of an object no need to write function keyword
        // Below approch is read only approch.    

        const person = {
            firstName : 'Akshay',
            lastName : 'Jagtap'
            
            // Genral syntax of an functoin
            // function fullName() {} 
            // fullName : function() {}
            

            fullName() {
                return `${person.firstName} ${person.lastName}`
            }
        };

        console.log(person.fullName());     // Akshay Jagtap


*/

// getters => access properties
// setters => change (mutete) then

const person = {
    firstName : 'Akshay',
    lastName : 'Jagtap',

    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },

    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(person.fullName);   //Akshay Jagtap

// setter is used to set from outside.

person.fullName = 'Ak Aj';
console.log(person);    //{ firstName: 'Ak', lastName: 'Aj', fullName: [Getter/Setter] }

