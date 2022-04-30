showstars(5);

function showstars(row){
    for(let i = 0; i < row; i++){
        let str = '';
        for(var j = 0; j <= i; j++)
        {
            str += '*';
        }
      console.log(str);
    }
}