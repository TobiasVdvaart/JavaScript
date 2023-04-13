let counter = 0;

function Button_01() {
    var afbeelding = document.getElementById("groote_cijfer");
    afbeelding.src = "afbeeldingen/grote_1.png"
    var afbeelding = document.getElementById("kleine_cijfer");
    afbeelding.src = "afbeeldingen/kleine_1.png"
    counter++;
}

function Button_02() {
    var afbeelding = document.getElementById("groote_cijfer");
    afbeelding.src = "afbeeldingen/grote_2.png"
    var afbeelding = document.getElementById("kleine_cijfer");
    afbeelding.src = "afbeeldingen/kleine_2.png"
    counter++;
}

function Button_03() {
    var afbeelding = document.getElementById("groote_cijfer");
    afbeelding.src = "afbeeldingen/grote_3.png"
    var afbeelding = document.getElementById("kleine_cijfer");
    afbeelding.src = "afbeeldingen/kleine_3.png"
    counter++;
}

console.log(counter)
