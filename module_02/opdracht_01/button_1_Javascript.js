function counter(e){
    getal = parseInt(e.innerHTML)
    getal +=1
    e.innerHTML = getal
}

var tem = ""

function Handlebutton(e) {
    var afbeelding = document.getElementById("groote_cijfer");
    console.log(e.id)
    afbeelding.src = "afbeeldingen/grote_"+e.id+".png";
    var afbeelding = document.getElementById("kleine_cijfer");
    afbeelding.src = "afbeeldingen/kleine_"+e.id+".png";
    counter(e)
    document.getElementById(+e.id).disabled = true;
    var tem = +e.id+
    console.log(tem);
}
document.getElementById(1).style.backgroundColor == green
    