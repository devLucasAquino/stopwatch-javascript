let verifyInput = false;
let min;
let sec;

function decreaseMinutes() {

    if (min > 0) {
        min--;
        updateParagraph(min, 'paragraph-minutes');
    }
    
}

function decreaseSeconds() {

    if (sec > 0) {
        sec--;
        updateParagraph(sec, 'paragraph-seconds');
    }
    
}

function start() {
    const minutes = document.getElementById('input-minutes').value;
    const seconds = document.getElementById('input-seconds').value;

    rmInput();

    if (!verifyInput) {
        min = minutes;
        sec = seconds;
        verifyInputMinutes = true;
        addParagraph(min, 'container-minutes', 'paragraph-minutes');
        addParagraph(sec, 'container-seconds', 'paragraph-seconds');
    }

    setInterval(decreaseMinutes, 1000);
    setInterval(decreaseSeconds, 1000);

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

