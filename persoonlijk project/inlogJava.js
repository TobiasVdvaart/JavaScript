let loggedIn = [];

function getGewerktString(datum1, datum2){
    const seconden = (datum1 - datum2) /1000;
    let minuten = 0;
    if(seconden > 60){
        minuten = Math.floor(seconden/60);
    }
    seconden -= verschil * 60;
    return  'gewerkt ' + minuten + 'minuten' + seconden + "seconden";
}



function getIndexOfElementByName(lijst, naam){
    for(let x = 0; x < lijst.length; x++){
        if(lijst[x]['naam'] === naam){
            return x;
        }
    }
    return null;
}

function handleLogin(){
    console.log(loggedIn);
    console.log(Date())

    let naam = document.getElementById("inputNaam").value;
    if (naam.length <= 0){
        alert("Voer een naam in!")
        return;
    }
    console.log("U hebt op de knop geklikt.");

    const positie = getIndexOfElementByName(loggedIn, naam);
    if (positie !== null){
        const oldDate = loggedIn[positie]['moment']
        const newDate = new Date();
        const verschilDate = (newDate - oldDate) /1000;
        console.log(verschilDate)
        loggedIn.splice(positie, 1)
        console.log("U bent uitgelogd: " + naam);
        document.getElementById('melding').innerText = "U bent uitgelogd: " + naam + getGewerktString(newDate, oldDate);

    } else{
        loggedIn.push({'naam': naam, 'tijd': new Date()});
        console.log("U bent ingelogd: " + naam);
        document.getElementById('melding').innerText = "U bent ingelogd: " + naam;
    }

    document.getElementById("inputNaam").value = "";
    console.log(loggedIn);
}

document.getElementById("button").onclick = handleLogin;
