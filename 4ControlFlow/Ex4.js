/* Speed limit = 70     -->Ok
5 --> 1 point
12 --> 12 point --> suspended
 Math.floor method is convert float number to int number
*/

checkSpeed(80);


function checkSpeed(speed){     
    const speedLimit = 70;
    const kmPerPoints = 5;

    if(speed <= speedLimit)
    console.log('Ok');
    else{
        const points = Math.floor((speed - speedLimit) / kmPerPoints);

            if(points >= 12)
                console.log('License is suspended');
            else
                console.log('Points: ' + points);
    }    
}


