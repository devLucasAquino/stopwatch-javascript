let verifyInputMinutes = false;
let min;

let verifyInputSeconds = false;
let sec;

function decreaseMinutes() {

    if (min > 0) {
        min--;
        updateParagraph(min);
    }
    
}

function start() {
    const minutes = document.querySelector('input').value;

    rmInput();

    if (!verifyInputMinutes) {
        min = minutes;
        verifyInputMinutes = true;
        addParagraph(min, 'container-minutes');
    }

    setInterval(decreaseMinutes, 1000);

}

function rmInput() {
    var removeInput = document.getElementById('input-minutes');
    removeInput.parentElement.removeChild(removeInput);
}

function addParagraph(time, id) {
    var container = document.getElementById(`${id}`);
    var paragraph = document.createElement('h1');
    paragraph.id = 'paragraph'
    paragraph.innerHTML = time;
    container.append(paragraph);
}

function updateParagraph(time) {
    var paragraph = document.getElementById('paragraph');
    if (paragraph) {
        paragraph.innerHTML = time;
    }
}

// function rmParagraph() {
//     var removeParagraph = document.getElementById('paragraph');
//     removeParagraph.parentElement.removeChild(removeParagraph);
// }

