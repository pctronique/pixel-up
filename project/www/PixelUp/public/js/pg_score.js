
// Création d'une ligne TD devant chaque TR pour Classement

let bodyTable = document.getElementById("tbodyscore");
let nombre = 1;


bodyTable.querySelectorAll("tr").forEach(element => {

    element.insertCell(0);

    // 3 Conditions pour afficher les trophées OR/SILVER/BRONZE, sinon afficher 4/5/6/7

    if( nombre == 1 ) {

        element.querySelector("td").innerHTML = "<iconify-icon icon='emojione-monotone:trophy' style='color: gold;'></iconify-icon>";

    } else if ( nombre == 2 ) {

        element.querySelector("td").innerHTML = "<iconify-icon icon='emojione-monotone:trophy' style='color: silver;'></iconify-icon>";

    } else if ( nombre == 3 ) {

        element.querySelector("td").innerHTML = "<iconify-icon icon='emojione-monotone:trophy' style='color: #ff8400;'></iconify-icon>";

    } else {

    element.querySelector("td").innerText = nombre;

    }

    nombre++

    
});


// Afficher / Masquer les modal pour score perso / classement 

function showBestScore() {
    document.getElementById("bestScore").style.display = "block";
    document.getElementById("ranked").style.display = "none";
}

function showRanked() {
    document.getElementById("ranked").style.display = "block";
    document.getElementById("bestScore").style.display = "none";
}
