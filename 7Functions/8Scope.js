        // 1
/*
const message = 'hello world';
console.log(message);   //hello world
*/
        //2
/*
{
    const message = 'hello world';
}
console.log(message);   //Uncaugh reference error: message is not defined.
*/
        //3
/*
    function start(){
        const message = 'hello world'; 
    }
    console.log(message);   //Uncaugh reference error: message is not defined.


*/
        //4
/*        
function start(){
    const message = 'hello world';

    if(true){
        const another = 'bye';
    }
    console.log(another);
}
start();
*/
        //5
/*        
        function start(){
            const message = 'hi';
        
            if(true){
                const another = 'bye';
            }
            for(let i = 0; i<5; i++){
                console.log(i);     // 0 1 2 3 4
            }    
        //    console.log(i);     // error           
        }       
        
        start();
*/   

        //6
        const color = 'red';

        function start(){
            const message = 'hi';
            const color = 'blue';
            console.log(color);    
        }        
        
        function stop(){
            const message = 'bye'; 
        }
        
        start();    // blue
        
        // local scope is high precidance compare to global scope. 
        
                
                
        
        
        
