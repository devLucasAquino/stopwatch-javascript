let verifyInputMinutes = false;
var min;

function start(){
    const minutes = document.querySelector('input').value;

    if(!verifyInputMinutes){
        min = minutes;
        verifyInputMinutes = true;
    }

    function lessMinutes(){   
        if(min > 0){
            min--;
        }
        return min
    }
}
