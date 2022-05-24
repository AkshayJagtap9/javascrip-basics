//The object that is executing the current function.

// if that function is an part of an object we call that functin is method.
//1 If that function method in a object this references object itself.(method-->obj)
//2 If that function is an regular function which means this is not part of an object (function --> window, global)


// Rule 1
const video = {
    title: 'a',
    play(){
        console.log(this);
    }
};

//video.play();   //{ title: 'a', play: [Function: play] }

video.stop = function() {
    console.log(this);
};

video.stop();   //{ title: 'a', play: [Function: play], stop: [Function (anonymous)] }

//Rule 2