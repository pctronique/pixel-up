// Afficher / Masquer les modal pour score perso / classement 

let bestScore = document.getElementById("bestScore");
let ranked = document.getElementById("ranked");

function showBestScore() {
    bestScore.style.display = "block";
    ranked.style.display = "none";
}

function showRanked() {
    ranked.style.display = "block";
    bestScore.style.display = "none";
}
