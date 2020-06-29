document.getElementById("name");

function Send() {
    alert("Message saved \n We will get back to you shortly");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}