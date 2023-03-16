const Drankenlijst = 
{
    'Bier': 3.99,
    'Fris': 2.99,
    'Wijn': 3.99
};

let Kladblok = new Object();


while (true){
     let drank = prompt("welke drankjes wilt u?")
    let aantal_drankjes = prompt("hoeveel wilt u er?")

    Kladblok[drank] = aantal_drankjes;
    console.log(Kladblok)
if (drank == "no"){
    break
}

}



// stap 1 is voeg een loop toe
//stap 2 toevoegenen en updaten
//laaste stap bon maken





// rekening["Bier"] = 3;
// rekening["wijn"] = 3;
// console.log(rekening)

// let vraag_01 = parseInt(prompt("Voer 1 in"));
// let aantal_drankjes = parseInt(prompt("Hoeveel drankjes wilt u?,"));

// let aantal_drankjes_02 = ''
// for (let i =vraag_01; i <= aantal_drankjes; i++) {
//          aantal_drankjes_02 = prompt("Welke drankjes wilt u?, Fris: 2,99 Wijn: 3,99 Bier: 3,99");
//   }










