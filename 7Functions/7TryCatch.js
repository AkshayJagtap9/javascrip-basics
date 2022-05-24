
const person = {
    firstName : 'Akshay',
    lastName : 'Jagtap',

    set fullName(value){
        
        if(typeof value !== 'string')
            throw new Error('Value is not string');
            
        const parts = value.split(' ');
        if(parts.length !== 2)
            throw new Error('Enter the first and last name');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try{
    person.fullName = '';
}
catch(e){
    console.log(e);
}

person.fullName = null;
console.log(person);  