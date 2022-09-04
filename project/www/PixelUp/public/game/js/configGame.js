let tabConfig = {
    key : {
        keySaut : ' ',
        keyGauche : 'ArrowLeft',
        keyDroite : 'ArrowRight',
        keyCoucou : 'c',
        keyHaut : 'ArrowUp',
        keyBas : 'ArrowDown',
    },
    volume : {
        musique : 100,
        game : 100,
    },
    sautTomber : {
        hauteurSaut : 200,
        millisecondeSaut : 2,
        millisecondeTomber : 2,
    },
    deplacement : {
        largeurDeplacement : 5,
        millisecondeDeplacement : 8,
    },
    coucou : {
        largeurCoucou : 5,
        millisecondeCoucou : 8,
    },
    game : {
        milliseconde : 40,
        scoreMilliseconde : 500,
    },
}

function saveLocal() {
    localStorage.setItem('pixelUpConfigurations', JSON.stringify(tabConfig));
    location.reload();
}

function loadLocal() {
    var config = localStorage.getItem('pixelUpConfigurations');
    if(config !== undefined && config != "" && config != "null" && config != null) {
    tabConfig = JSON.parse(config);
    }
}

document.getElementById("config").addEventListener("click", function(e){
    document.getElementById("saut").value = tabConfig.key.keySaut;
    document.getElementById("gauche").value = tabConfig.key.keyGauche;
    document.getElementById("droite").value = tabConfig.key.keyDroite;
    document.getElementById("coucou").value = tabConfig.key.keyCoucou;
    document.getElementById("haut").value = tabConfig.key.keyHaut;
    document.getElementById("bas").value = tabConfig.key.keyBas;
    document.getElementById("volumeMusique").value = tabConfig.volume.musique;
    document.getElementById("volumeJeu").value = tabConfig.volume.game;
});

document.getElementById("valider").addEventListener("click", function(e) {
    e.preventDefault();

    tabConfig.key.keySaut =document.getElementById("saut").value;
    tabConfig.key.keyGauche = document.getElementById("gauche").value;
    tabConfig.key.keyDroite = document.getElementById("droite").value;
    tabConfig.key.keyCoucou = document.getElementById("coucou").value;
    tabConfig.key.keyHaut = document.getElementById("haut").value;
    tabConfig.key.keyBas = document.getElementById("bas").value;
    tabConfig.volume.musique = parseInt(document.getElementById("volumeMusique").value);
    tabConfig.volume.game = parseInt(document.getElementById("volumeJeu").value);
    
    saveLocal();

});
document.getElementById("config").addEventListener("click", function(e){
    document.getElementById("hauteurSaut").value = tabConfig.sautTomber.hauteurSaut;
    document.getElementById("millisecondeSaut").value = tabConfig.sautTomber.millisecondeSaut;
    document.getElementById("millisecondeTomber").value = tabConfig.sautTomber.millisecondeTomber;
    document.getElementById("largeurDeplacement").value = tabConfig.deplacement.largeurDeplacement;
    document.getElementById("millisecondeDeplacement").value = tabConfig.deplacement.millisecondeDeplacement;
    document.getElementById("largeurCoucou").value = tabConfig.coucou.largeurCoucou;
    document.getElementById("millisecondeCoucou").value = tabConfig.coucou.millisecondeCoucou;
    document.getElementById("millisecondeJeu").value = tabConfig.game.milliseconde;
    document.getElementById("millisecondeScore").value = tabConfig.game.scoreMilliseconde;
});

document.getElementById("validerConfig").addEventListener("click", function(e) {
    e.preventDefault();
    
    tabConfig.sautTomber.hauteurSaut = document.getElementById("hauteurSaut").value;
    tabConfig.sautTomber.millisecondeSaut = document.getElementById("millisecondeSaut").value;
    tabConfig.sautTomber.millisecondeTomber = document.getElementById("millisecondeTomber").value; 
    tabConfig.deplacement.largeurDeplacement = document.getElementById("largeurDeplacement").value;
    tabConfig.deplacement.millisecondeDeplacement = document.getElementById("millisecondeDeplacement").value; 
    tabConfig.coucou.largeurCoucou = document.getElementById("largeurCoucou").value;
    tabConfig.coucou.millisecondeCoucou = document.getElementById("millisecondeCoucou").value;
    tabConfig.game.milliseconde = document.getElementById("millisecondeJeu").value;
    tabConfig.game.scoreMilliseconde = document.getElementById("millisecondeScore").value;
   
    saveLocal();
});

document.getElementById("bp_saut").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("bp_saut").addEventListener('keydown', function(e) {
        document.getElementById("saut").value = e.key;
        document.getElementById("bp_saut").removeEventListener("keydown", undefined);
    });
});

document.getElementById("bp_droite").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("bp_droite").addEventListener('keydown', function(e) {
        document.getElementById("droite").value = e.key;
        document.getElementById("bp_droite").removeEventListener("keydown", undefined);
    });
});

document.getElementById("bp_gauche").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("bp_gauche").addEventListener('keydown', function(e) {
        document.getElementById("gauche").value = e.key;
        document.getElementById("bp_gauche").removeEventListener("keydown", undefined);
    });
});

document.getElementById("bp_haut").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("bp_haut").addEventListener('keydown', function(e) {
        document.getElementById("haut").value = e.key;
        document.getElementById("bp_haut").removeEventListener("keydown", undefined);
    });
});

document.getElementById("bp_bas").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("bp_bas").addEventListener('keydown', function(e) {
        document.getElementById("bas").value = e.key;
        document.getElementById("bp_bas").removeEventListener("keydown", undefined);
    });
});

document.getElementById("bp_coucou").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("bp_coucou").addEventListener('keydown', function(e) {
        document.getElementById("coucou").value = e.key;
        document.getElementById("bp_coucou").removeEventListener("keydown", undefined);
    });
});

loadLocal();
