let verifyInput = false;
let min;
let sec;

function decreaseSeconds() {

    if (sec > 0) {
        sec--;
        updateParagraph(sec, 'paragraph-seconds');
    }
    
}

function checkSeconds( time_sec ){

    if (time_sec === 0) {
        min--;
        updateParagraph(min, 'paragraph-minutes');
    }
}

function decreaseMinutes() {

    setInterval(decreaseSeconds, 1000);
}

function returnMinutes(){
    let minutes = document.getElementById('input-minutes').value;

    if(minutes > 59){
        minutes = 59;
    }else if(minutes < 0 || minutes == ""){
        minutes = 0;
    }
    return minutes;
}

function returnSeconds(){
    let seconds = document.getElementById('input-seconds').value;
    
    if(seconds > 59){
        seconds = 59;
    }else if(seconds < 0 || seconds == ""){
        seconds = 0;
    }
    return seconds;
}

function start() {
    
    let minutes = returnMinutes();
    let seconds = returnSeconds();


    rmInput();

    if (!verifyInput) {
        min = minutes;
        sec = seconds;
        verifyInputMinutes = true;
        addParagraph(min, 'container-minutes', 'paragraph-minutes');
        addParagraph(sec, 'container-seconds', 'paragraph-seconds');
    }

    decreaseMinutes();
    setInterval(checkSeconds( sec ), 1000);
    

}



//////////////////WORKINGGGG!!///////////////////////
function reset(){
    const minutes = document.getElementById('input-minutes').value;
    const seconds = document.getElementById('input-seconds').value;

    min = minutes;
    sec = seconds;

    updateParagraph(min, 'paragraph-minutes');
    updateParagraph(sec, 'paragraph-seconds');
}

//////////////////////////////////////////////

function rmInput() {
    var removeInputMin = document.getElementById('input-minutes');
    var removeInputSec = document.getElementById('input-seconds');
    removeInputMin.parentElement.removeChild(removeInputMin);
    removeInputSec.parentElement.removeChild(removeInputSec);
}

function addParagraph(time, id, id_element) {
    var container = document.getElementById(`${id}`);
    var paragraph = document.createElement('h1');
    paragraph.id = `${id_element}`
    paragraph.innerHTML = time;
    container.append(paragraph);
}

function updateParagraph(time, id_element) {
    var paragraph = document.getElementById(`${id_element}`);
    if (paragraph) {
        paragraph.innerHTML = time;
    }
}

