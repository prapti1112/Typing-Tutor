let letterCount = 0;
let letter = [];
let displayPracticeLetters = [];


for (let i = 4; i < 8; i++) {
    document.getElementsByTagName('div')[i].addEventListener('click', showPracticeLetters);
}
document.addEventListener('keypress', checkKey)


function showPracticeLetters() {
    //getting the letters to be praticed
    for (let i = 0; i < (this.className).length; i++) {
        letter[i] = (this.className)[i];
    }

    for (let i = 0; i < 6; i++) {
        displayPracticeLetters[i] = letter[Math.floor(Math.random() * 3)];
    }

    for (let i = 10; i < 16; i++) {
        document.getElementsByTagName('div')[i].innerHTML = displayPracticeLetters[i - 10];
    }
}


function checkKey(event) {
    let characterCode = event.char || event.charCode || event.which;
    let character = String.fromCharCode(characterCode);
    let element = document.getElementById("letters-" + (letterCount + 1));
    if (displayPracticeLetters[letterCount] == character) {
        element.style.backgroundColor = "green";
    }
    else {
        element.style.backgroundColor = "red";
        letterCount--;
    }
    if (displayPracticeLetters[letterCount] == "_" && (characterCode == 32 || character == "_")) {
        element.style.backgroundColor = "green";
    }
    letterCount++;
    if (letterCount == 6) {
        setTimeout(() => {
            for (let index = 0; index < 6; index++) {
                document.getElementById("letters-" + (index + 1)).style.backgroundColor = "rgba(238, 238, 238, 0.87)";
            }
        }, 500);
        letterCount = 0;
    }
}

