Antwoord_cijfer = []
string = ''

let vraag_cijfer = prompt("voer een cijfer in.")
for(let x = 1 ; x < vraag_cijfer +1 ; x++){
    Antwoord_cijfer.push(x)
    string += (Antwoord_cijfer.join('_')) + "\n";
}

for(let t = 1 ; t < vraag_cijfer +1 ; t++){
    Antwoord_cijfer.pop(t)
    string += (Antwoord_cijfer.join('_')) + "\n";
}

console.log(string)
console.log(Antwoord_cijfer)

document.getElementById("Antwoord_cijfer")
document.getElementById("string")