let x = document.getElementById('login');
let y = document.getElementById('signUp');
let z = document.getElementById('btn');
let box = document.getElementById('form-box');
let name = document.getElementsById('name');

function signUp() {
    x.style.left = '-400px';
    y.style.left = '50px';
    z.style.left = '135px';
    box.style.height = "500px";
    box.style.backgroundColor = 'white';
}

function login() {
    x.style.left = '50px';
    y.style.left = '450px';
    z.style.left = '0px';
    box.style.height = "480px";
}

function pros(text) {
    if (name != "")
        alert(`${name} Sucessfull ${text}!!`);
}