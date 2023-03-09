let LoggedIn = [];
function getElementByName(LoggedIn, naam){

    return -1;
}

function handleLogin(){
    console.log(LoggedIn);
    console.log(Date())

    let naam = document.getElementById("inputNaam").value;
    if (naam.length <= 0){
        alert("voer een naam in!")
        return
    }
    console.log("U hebt op de knop geklikt!");
    if (LoggedIn.includes(naam)){
        LoggedIn.splice(LoggedIn.indexOf(naam),  1)
        console.log(" U bent uitgelogd" + naam);
        document.getElementById("melding").innerText = "U bent uitgelogd " + naam;
    } else {
        LoggedIn.push({"de naam" : naam, "de datum": Date()});
        console.log(LoggedIn);
        document.getElementById("melding").innerText = "U bent ingelogd " + naam;
    }
    document.getElementById("inputNaam").value = "";
    console.log(LoggedIn)
    

}

document.getElementById("inlogbutton").onclick = handleLogin;  

