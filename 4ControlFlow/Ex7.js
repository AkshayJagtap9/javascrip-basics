// print noly string value in the object

const movies = {
    title: 'a',
    releseYear: 2018,
    rating: 4.5,
    director: 'b'
}

showProperties(movies);

function showProperties(obj){
    for(let k in obj){
        if(typeof obj[k] === 'string')
        console.log(k, obj[k]);
    }
}

// title a
// director b
