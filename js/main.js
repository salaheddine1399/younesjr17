var password = "12345";
function passcheck() {
if(document.getElementById("motdepasse").value != password){

    alert("Wrong Password, Try Again. ");
}

if(document.getElementById("motdepasse").value == password){

    window.open("page1.html");
    
}

}
