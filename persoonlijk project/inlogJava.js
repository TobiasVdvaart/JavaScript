let naam_ingelogd = " "

let naam_ingelog = "";

function handleLogin(){
    let naam = document.getElementById("inputNaam").value;
    console.log("U hebt op de knop geklikt!");
    if (naam_ingelogd === ""){
        naam_ingelogd = naam;
        console.log("U bent ingelogd: " + naam);
        document.getElementById("inputNaam").value = "";
    }
}