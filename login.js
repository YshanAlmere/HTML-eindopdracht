let username = document.getElementById("fname");
let password = document.getElementById("lname");
let voornaam = "yshan";
let achternaam = "ho";

function login(){
    console.log(username.value);
    if(username.value == voornaam && password.value == achternaam){
        document.location.href = "index.html";
    }
}