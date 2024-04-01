let checkInput = false;

let reservedMin;
let reservedSec;
let intervalID;
let min;
let sec;

function decreaseSeconds() {
    if (sec > 0) {
        sec--;
        updateParagraph(sec, 'paragraph-seconds');
    }
    if(min === 0 && sec === 0){
        stop();
    }else if(min > 0){

        if(sec === 0){
            sec = 59;
            decreaseMinutes();
            updateParagraph(sec, 'paragraph-seconds');
        }
    }
}

function decreaseMinutes() {
    min--;
    updateParagraph(min, 'paragraph-minutes');
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
    reservedMin = returnMinutes();
    reservedSec = returnSeconds();

    rmInput();
    
    if (!checkInput) {
        min = minutes;
        sec = seconds;
        checkInput = true;
        addParagraph(min, 'container-minutes', 'paragraph-minutes');
        addParagraph(sec, 'container-seconds', 'paragraph-seconds');
    } 
    intervalID = setInterval(decreaseSeconds, 1000);
}

function reset(){

    if(checkInput){
        clearInterval(intervalID);
        updateParagraph(reservedMin, 'paragraph-minutes');
        updateParagraph(reservedSec, 'paragraph-seconds');
        checkInput = false; 
    }
}

function stop(){
    clearInterval(intervalID);
}

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

