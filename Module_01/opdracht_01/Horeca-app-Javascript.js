const Drankenlijst = 
{
    'Bier': 3.99,
    'Fris': 2.99,
    'Wijn': 3.99
};

let rekening = new Object();
rekening["Bier"] = aantal_drankjes_02;
rekening["wijn"] = aantal_drankjes_02;
console.log(rekening)

let vraag_01 = parseInt(prompt("Voer 1 in"));
let aantal_drankjes = parseInt(prompt("Hoeveel drankjes wilt u?,"));

let aantal_drankjes_02 = ''
for (let i =vraag_01; i <= aantal_drankjes; i++) {
         aantal_drankjes_02 = prompt("Welke drankjes wilt u?, Fris: 2,99 Wijn: 3,99 Bier: 3,99");
  }










