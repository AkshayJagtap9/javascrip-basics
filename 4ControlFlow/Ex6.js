// falsy value ==> undefined, null, emptystring ' ', false, 0, NaN
//count the number of truthy value.

const array = [0, 5, "Ak", true, false, 1, '']; 

console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for(let value of array)
        if(value)
        count++;    
    return count;
}