
let int_aantal_drank = 0

const Drankenlijst = 
{
    'Bier': 4,
    'Fris': 3,
    'Wijn': 4
};

let Kladblok = new Object();

let drank = ''
let aantal_drankjes = 0

while (true){
    drank = prompt("welke drankjes wilt u? , Bier, Fris, Wijn")
    if(drank == "Bier" || drank == "Fris" || drank == "Wijn" ){
        aantal_drankjes = prompt('hoeveel  '  +drank+  'wilt u hebben?')
        int_aantal_drank = parseInt(aantal_drankjes)
        if (drank in Kladblok){
            Kladblok[drank] += int_aantal_drank
       }
       if(!(drank in Kladblok)){
           Kladblok[drank] = int_aantal_drank;
       }
    }
    else if(drank != "stop" ){
        alert("we hebben uw gewenste drankje niet")
    }
    console.log(Kladblok)
    if (drank == "stop"){
        break  
    }
}

let prijs_bier = Kladblok['Bier'] * Drankenlijst["Bier"]
let prijs_fris = Kladblok['Fris']* Drankenlijst["Fris"]
let prijs_wijn = Kladblok['Wijn'] * Drankenlijst["Wijn"]
let totaal = prijs_bier + prijs_fris + prijs_wijn


console.log('-------------------\n' +
'Bier: ' +prijs_bier+ 'euro, stuks' +Kladblok["bier"][int_aantal_drank] + '\n' +
'Fris: ' +prijs_fris+ 'euro, stuks' +Kladblok["Fris"][int_aantal_drank] + '\n' +
'Wijn: ' +prijs_wijn+ 'euro, stuks' +Kladblok["bier"][int_aantal_drank] + '\n' +
'totaal: ' +totaal+ 'euro\n' )





