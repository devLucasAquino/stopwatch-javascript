let verifyInputMinutes = false;
let min;

function decreaseMinutes() {

    if (min > 0) {
        min--;
        updateParagraph();
    }
    
}

function start() {
    const minutes = document.querySelector('input').value;
    
    rmInput();

    if (!verifyInputMinutes) {
        min = minutes;
        verifyInputMinutes = true;
        addParagraph();
    }

    setInterval(decreaseMinutes, 1000);

}

function rmInput() {
    var removeInput = document.getElementById('input-minutes');
    removeInput.parentElement.removeChild(removeInput);
}

function addParagraph() {
    var container = document.getElementById("input");
    var paragraph = document.createElement('h1');
    paragraph.id = 'paragraph'
    paragraph.innerHTML = min;
    container.append(paragraph);
}

function updateParagraph() {
    var paragraph = document.getElementById('paragraph');
    if (paragraph) {
        paragraph.innerHTML = min;
    }
}

function rmParagraph() {
    var removeParagraph = document.getElementById('paragraph');
    removeParagraph.parentElement.removeChild(removeParagraph);
}

