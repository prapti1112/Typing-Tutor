let f_words = ["afar", "alef", "alfa", "barf", "beef", "bumf", "calfs", "chief", "draft"];
let j_words = ["jo", "jab", "jam", "jar", "jaw", "ajara", "jee", "joke", "dojo", "banjo", "adjust", "enjoys", "ninja", "major", 'conjoin', "injuries", "deject", "project", "unjaded"];
displayWords = [];

displayWords[0] = f_words[Math.floor(Math.random() * f_words.length)];
displayWords[1] = j_words[Math.floor(Math.random() * j_words.length)];
displayWords[2] = f_words[Math.floor(Math.random() * f_words.length)];
displayWords[3] = j_words[Math.floor(Math.random() * j_words.length)];
let letter_count = 0;
let word = "";

words = document.getElementsByTagName("span");
for (let i = 1; i < words.length; i++) {
    word += words[i].innerText;
}

document.addEventListener('keypress', checkKeyPressed);

function checkKeyPressed(event) {
    let characterCode = event.char || event.charCode || event.which;
    let character = String.fromCharCode(characterCode);
    console.log(character);
    console.log(word[letter_count]);
    if (word[letter_count] == character) {
        words[letter_count + 1].style.color = "green";
    }
    else {
        words[letter_count + 1].style.color = "red";
        letter_count--;
    }
    letter_count++;
}