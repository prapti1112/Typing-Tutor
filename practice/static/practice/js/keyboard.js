const practiceUrl = "http://127.0.0.1:8000/practice/";
const practiceLessonUrl = "http://127.0.0.1:8000/practice/lesson";
//let text = "";

if (document.URL == practiceUrl) {
    document.addEventListener('keypress', getCharacterPressed);
}
else if (document.URL == practiceLessonUrl) {
    alert("Lesson started");
    document.addEventListener('keypress', getCharacterPressed);
}


function getCharacterPressed(event) {
    let characterCode = event.char || event.charCode || event.which;
    let character = String.fromCharCode(characterCode);
    showKeyPressed(character, characterCode);
}

function showKeyPressed(character, characterCode) {
    let min = 0;
    let max = 0;
    let blank = 0;
    let keys = document.getElementsByTagName("div");
    if (document.URL == practiceUrl) {

        min = 28;
        max = 102;
        blank = 98;
    }
    if (document.URL == practiceLessonUrl) {

        min = 16;
        max = 90;
        blank = 86;
    }
    for (let index = min; index < max; index++) {
        if (keys[index].innerText == character.toUpperCase()) {
            keys[index].style.backgroundColor = "coral";
            setTimeout(function () {
                keys[index].style.backgroundColor = "white";
            }, 200);
        }
        else if (characterCode == 32) {
            keys[blank].style.backgroundColor = "coral";
            setTimeout(function () {
                keys[blank].style.backgroundColor = "white";
            }, 200);
        }
    }
}
