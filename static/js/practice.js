let i = 0;
let ckeckString = "This is a test text to be displayed."

document.addEventListener('DOMContentLoaded', init);

function init() {
    document.addEventListener('keypress', anykey);
}

function anykey(event) {
    let char = event.char || event.charCode || event.which;
    let s = String.fromCharCode(char);
    if (s == ckeckString[i]) {
        console.log(s, "True");
        document.getElementById((i + 1).toString()).style.color = "black";
    }
    else {
        console.log(s, "False");
        document.getElementById((i + 1).toString()).style.color = "red";
        i--;
    }
    i++;
} 