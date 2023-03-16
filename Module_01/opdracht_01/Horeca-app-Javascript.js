const Drankenlijst = 
{
    'Bier': 3.99,
    'Fris': 2.99,
    'Wijn': 3.99
};

let Kladblok = new Object();


while (true){
    let drank = prompt("welke drankjes wilt u?, Bier, Fris, Wijn")
    if(drank == 'Bier' || drank == 'Fris' || drank == 'Wijn'){
        let aantal_drankjes = prompt('hoeveel ' +drank+ 'wilt u hebben?')
        Kladblok[drank] = aantal_drankjes;
        console.log(Kladblok)
    
    }
    if (drank == "niks"){
        break
    
}

}



// stap 1 is voeg een loop toe
//stap 2 toevoegenen en updaten
//laaste stap bon maken








