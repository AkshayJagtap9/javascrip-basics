/* if hours in between 6am and 12pm: Good Morning.
if it is between 12pm and 6pm: Good afternoon.
otherwise good evening */

let hours = 10;

if(hours >= 6 && hours <=12 )
{
    console.log('Good Morning');
}

else if(hours >= 12 && hours <= 18)
{
    console.log('Good Afternoon');   
}
else{
    console.log('Good evening');   

}