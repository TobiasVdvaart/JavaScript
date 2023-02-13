let naam_ingelogd = " "

function handlelogin(){
    let Naam = document.getElementById("Inputnaam").value; 
    console.log("u heeft of de knop gedrukt")
    if (naam_ingelogd === ""){
        console.log("u bent ingelogd");{
            naam_ingelogd = Naam;
            console.log("u bent ingelogd: " + Naam);
            document.getElementById("inputNaam").value = "";
        } 
    }
}