var Dranklijst = {
    "Wijn": "3,99",
    "Bier": "3,99",
    "cola": "1,99",
};

console.log(Dranklijst)

let vraag = prompt("wat wilt u drinken? Wijn: 3,99 Bier: 3,99 Cola: 1,99")

if(vraag != Dranklijst) {
    console.log("het drankje wat u wilt hebben we niet!")
}
