let tabConfigBackground = {
    SOUS_TERRE : {
        minX : 50,
        maxX : 300,
        minY : 25,
        maxY : 80,
        nbPiege : -1,
    },
    SOUS_MER : {
        minX : 50,
        maxX : 300,
        minY : 25,
        maxY : 80,
        nbPiege : -1,
    },
    TERRE : {
        minX : 50,
        maxX : 300,
        minY : 25,
        maxY : 80,
        nbPiege : -1,
    },
    CIEL_NUAGE : {
        minX : 50,
        maxX : 300,
        minY : 25,
        maxY : 80,
        nbPiege : -1,
    },
    CIEL_AVIONS : {
        minX : 50,
        maxX : 300,
        minY : 25,
        maxY : 80,
        nbPiege : -1,
    },
    ESPACE_ASTEROIDE : {
        minX : 50,
        maxX : 300,
        minY : 25,
        maxY : 80,
        nbPiege : -1,
    },
    ESPACE_SATELLITE : {
        minX : 50,
        maxX : 300,
        minY : 25,
        maxY : 80,
        nbPiege : -1,
    },
    ESPACE_VAISSEAU : {
        minX : 50,
        maxX : 300,
        minY : 25,
        maxY : 80,
        nbPiege : -1,
    },
}

function saveLocalConfigBackground() {
   
    localStorage.setItem('pixelUpConfigurationsBackground', JSON.stringify(tabConfigBackground));
}

function loadLocalConfigBackground() {
    var config = localStorage.getItem('pixelUpConfigurationsBackground');
    if(config !== undefined && config != "" && config != "null" && config != null) {
    
    tabConfigBackground = JSON.parse(config);
    }
}
document.getElementById("config3").addEventListener("click", function(e){
    document.getElementById("sousTerreMinX").value = tabConfigBackground.SOUS_TERRE.minX;
    document.getElementById("sousTerreMaxX").value = tabConfigBackground.SOUS_TERRE.maxX;
    document.getElementById("sousTerreMinY").value = tabConfigBackground.SOUS_TERRE.minY;
    document.getElementById("sousTerreMaxY").value = tabConfigBackground.SOUS_TERRE.maxX;
    document.getElementById("sousTerreNbPiege").value = tabConfigBackground.SOUS_TERRE.nbPiege;
    document.getElementById("sousMerMinX").value = tabConfigBackground.SOUS_MER.minX;
    document.getElementById("sousMerMaxX").value = tabConfigBackground.SOUS_MER.maxX;
    document.getElementById("sousMerMinY").value = tabConfigBackground.SOUS_MER.minY;
    document.getElementById("sousMerMaxY").value = tabConfigBackground.SOUS_MER.maxX;
    document.getElementById("sousMerNbPiege").value = tabConfigBackground.SOUS_MER.nbPiege;
    document.getElementById("terreMinX").value = tabConfigBackground.TERRE.minX;
    document.getElementById("terreMaxX").value = tabConfigBackground.TERRE.maxX;
    document.getElementById("terreMinY").value = tabConfigBackground.TERRE.minY;
    document.getElementById("terreMaxY").value = tabConfigBackground.TERRE.maxX;
    document.getElementById("terreNbPiege").value = tabConfigBackground.TERRE.nbPiege;
    document.getElementById("cielNuagesMinX").value = tabConfigBackground.CIEL_NUAGE.minX;
    document.getElementById("cielNuagesMaxX").value = tabConfigBackground.CIEL_NUAGE.maxX;
    document.getElementById("cielNuagesMinY").value = tabConfigBackground.CIEL_NUAGE.minY;
    document.getElementById("cielNuagesMaxY").value = tabConfigBackground.CIEL_NUAGE.maxX;
    document.getElementById("cielNuagesNbPiege").value = tabConfigBackground.CIEL_NUAGE.nbPiege;
    document.getElementById("cielAvionMinX").value = tabConfigBackground.CIEL_AVIONS.minX;
    document.getElementById("cielAvionMaxX").value = tabConfigBackground.CIEL_AVIONS.maxX;
    document.getElementById("cielAvionMinY").value = tabConfigBackground.CIEL_AVIONS.minY;
    document.getElementById("cielAvionMaxY").value = tabConfigBackground.CIEL_AVIONS.maxX;
    document.getElementById("cielAvionNbPiege").value = tabConfigBackground.CIEL_AVIONS.nbPiege;
    document.getElementById("espaceAsteroideMinX").value = tabConfigBackground.ESPACE_ASTEROIDE.minX;
    document.getElementById("espaceAsteroideMaxX").value = tabConfigBackground.ESPACE_ASTEROIDE.maxX;
    document.getElementById("espaceAsteroideMinY").value = tabConfigBackground.ESPACE_ASTEROIDE.minY;
    document.getElementById("espaceAsteroideMaxY").value = tabConfigBackground.ESPACE_ASTEROIDE.maxX;
    document.getElementById("espaceAsteroideNbPiege").value = tabConfigBackground.ESPACE_ASTEROIDE.nbPiege;
    document.getElementById("espaceSatelliteMinX").value = tabConfigBackground.ESPACE_SATELLITE.minX;
    document.getElementById("espaceSatelliteMaxX").value = tabConfigBackground.ESPACE_SATELLITE.maxX;
    document.getElementById("espaceSatelliteMinY").value = tabConfigBackground.ESPACE_SATELLITE.minY;
    document.getElementById("espaceSatelliteMaxY").value = tabConfigBackground.ESPACE_SATELLITE.maxX;
    document.getElementById("espaceSatelliteNbPiege").value = tabConfigBackground.ESPACE_SATELLITE.nbPiege;
    document.getElementById("espaceVaisseauMinX").value = tabConfigBackground.ESPACE_VAISSEAU.minX;
    document.getElementById("espaceVaisseauMaxX").value = tabConfigBackground.ESPACE_VAISSEAU.maxX;
    document.getElementById("espaceVaisseauMinY").value = tabConfigBackground.ESPACE_VAISSEAU.minY;
    document.getElementById("espaceVaisseauMaxY").value = tabConfigBackground.ESPACE_VAISSEAU.maxX;
    document.getElementById("espaceVaisseauNbPiege").value = tabConfigBackground.ESPACE_VAISSEAU.nbPiege;
});

document.getElementById("validerConfigBackground").addEventListener("click", function(e) {
    e.preventDefault();

    tabConfigBackground.SOUS_TERRE.minX = document.getElementById("sousTerreMinX").value; 
    tabConfigBackground.SOUS_TERRE.maxX = document.getElementById("sousTerreMaxX").value; 
    tabConfigBackground.SOUS_TERRE.minY = document.getElementById("sousTerreMinY").value; 
    tabConfigBackground.SOUS_TERRE.maxX = document.getElementById("sousTerreMaxY").value;
    tabConfigBackground.SOUS_TERRE.nbPiege = document.getElementById("sousTerreNbPiege").value; 
    tabConfigBackground.SOUS_MER.minX = document.getElementById("sousMerMinX").value; 
    tabConfigBackground.SOUS_MER.maxX = document.getElementById("sousMerMaxX").value;
    tabConfigBackground.SOUS_MER.minY = document.getElementById("sousMerMinY").value;
    tabConfigBackground.SOUS_MER.maxX = document.getElementById("sousMerMaxY").value;
    tabConfigBackground.SOUS_MER.nbPiege = document.getElementById("sousMerNbPiege").value; 
    tabConfigBackground.TERRE.minX = document.getElementById("terreMinX").value;
    tabConfigBackground.TERRE.maxX = document.getElementById("terreMaxX").value;
    tabConfigBackground.TERRE.minY = document.getElementById("terreMinY").value;
    tabConfigBackground.TERRE.maxX = document.getElementById("terreMaxY").value;
    tabConfigBackground.TERRE.nbPiege = document.getElementById("terreNbPiege").value;
    tabConfigBackground.CIEL_NUAGE.minX = document.getElementById("cielNuagesMinX").value;
    tabConfigBackground.CIEL_NUAGE.maxX = document.getElementById("cielNuagesMaxX").value; 
    tabConfigBackground.CIEL_NUAGE.minY = document.getElementById("cielNuagesMinY").value;
    tabConfigBackground.CIEL_NUAGE.maxX = document.getElementById("cielNuagesMaxY").value;
    tabConfigBackground.CIEL_NUAGE.nbPiege = document.getElementById("cielNuagesNbPiege").value;
    tabConfigBackground.CIEL_AVIONS.minX = document.getElementById("cielAvionMinX").value; 
    tabConfigBackground.CIEL_AVIONS.maxX = document.getElementById("cielAvionMaxX").value;
    tabConfigBackground.CIEL_AVIONS.minY = document.getElementById("cielAvionMinY").value;
    tabConfigBackground.CIEL_AVIONS.maxX = document.getElementById("cielAvionMaxY").value;
    tabConfigBackground.CIEL_AVIONS.nbPiege = document.getElementById("cielAvionNbPiege").value;
    tabConfigBackground.ESPACE_ASTEROIDE.minX = document.getElementById("espaceAsteroideMinX").value;
    tabConfigBackground.ESPACE_ASTEROIDE.maxX = document.getElementById("espaceAsteroideMaxX").value; 
    tabConfigBackground.ESPACE_ASTEROIDE.minY = document.getElementById("espaceAsteroideMinY").value;
    tabConfigBackground.ESPACE_ASTEROIDE.maxX = document.getElementById("espaceAsteroideMaxY").value; 
    tabConfigBackground.ESPACE_ASTEROIDE.nbPiege = document.getElementById("espaceAsteroideNbPiege").value;
    tabConfigBackground.ESPACE_SATELLITE.minX = document.getElementById("espaceSatelliteMinX").value; 
    tabConfigBackground.ESPACE_SATELLITE.maxX = document.getElementById("espaceSatelliteMaxX").value;
    tabConfigBackground.ESPACE_SATELLITE.minY = document.getElementById("espaceSatelliteMinY").value;
    tabConfigBackground.ESPACE_SATELLITE.maxX = document.getElementById("espaceSatelliteMaxY").value;
    tabConfigBackground.ESPACE_SATELLITE.nbPiege = document.getElementById("espaceSatelliteNbPiege").value;
    tabConfigBackground.ESPACE_VAISSEAU.minX = document.getElementById("espaceVaisseauMinX").value;
    tabConfigBackground.ESPACE_VAISSEAU.maxX = document.getElementById("espaceVaisseauMaxX").value;
    tabConfigBackground.ESPACE_VAISSEAU.minY = document.getElementById("espaceVaisseauMinY").value; 
    tabConfigBackground.ESPACE_VAISSEAU.maxX = document.getElementById("espaceVaisseauMaxY").value; 
    tabConfigBackground.ESPACE_VAISSEAU.nbPiege = document.getElementById("espaceVaisseauNbPiege").value;



    saveLocalConfigBackground();

});
loadLocalConfigBackground();