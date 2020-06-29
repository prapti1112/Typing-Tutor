let i = 0;
let textBox = document.getElementById('test_text');
let timerInfo = document.getElementById('info');
let time = "02:00";
let timeUp = false;
let correct = 0; let wrong = 0;
textBox.addEventListener('click', start);


//getting the text being typed from the text box
let text = "";
let tag = document.getElementsByTagName('span');
for (let index = 1; index < tag.length; index++) {
    text = text.concat(tag[index].innerText);
}

//function to start the process of typing
function start(event) {
    textBox.style.backgroundColor = "rgb(255, 196, 175)";
    timmer = setInterval(startTimmer, 1000);
    if (timmer) {
        document.getElementById("accuracy_info").innerHTML = "0%";
        document.addEventListener('keypress', checkKey);
    }
    else {
        textBox.style.backgroundColor = "rgb(255, 181, 154)";
    }
}

//function to check if the key typed is the correct one and changing the styles accordingly
function checkKey(event) {
    document.getElementById("accuracy_info").innerHTML = parseInt(correct / (correct + wrong) * 100) + "%";

    let characterCode = event.char || event.charCode || event.which;
    let character = String.fromCharCode(characterCode);
    let letterId = "letter-".concat((i + 1).toString());
    if (text[i] == '_' && character == ' ') {
        document.getElementById(letterId).style.color = "black";
    }
    else {
        if (character < 'a') {
            console.log("Shift pressed");
        }
        if (character == text[i]) {
            document.getElementById(letterId).style.color = "black";
            correct++;
        }
        else {
            document.getElementById(letterId).style.color = "red";
            wrong++;
            i--;
        }
    }
    i++;
}

function startTimmer(params) {
    let min = 0; let sec = 0;
    t = time.split(':');
    min = parseInt(t[0]); sec = parseInt(t[1]);
    if (sec == 0) {
        if (min > 0) {
            sec = 59;
            min--;
        }
        else {
            timeUp = true
        }
    }
    else {
        sec--;
    }

    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    time = min + ":" + sec;
    let timerInfo = document.getElementById('info');
    timerInfo.innerHTML = time;
    if (timeUp) {
        timerInfo.innerHTML = "Time Up!!!";
        clearInterval(timmer);
    }
}

