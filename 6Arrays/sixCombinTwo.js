const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined);      //[ 1, 2, 3, 4, 5, 6 ]

const slice = combined.slice(2, 4);         // [3, 4]
//const slice = combined.slice(2);        //[3, 4, 5, 6]

// including  index position

 console.log(slice);     // original combined array
 console.log(combined);   // print combined array


         //OR
/*        
const first = [{id:1}];
const second = [4, 5, 6];

const combined = first.concat(second);
first[0].id = 10;

const slice = combined.slice();
console.log(combined);    //[ { id: 10 }, 4, 5, 6 ]
console.log(slice);       //[ { id: 10 }, 4, 5, 6 ]
*/