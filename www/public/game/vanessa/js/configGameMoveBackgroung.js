let tabConfigMoveBackground = {
    SOUS_TERRE : {
        hauteurSaut : 100,
        millisecondeSaut : 2,
        millisecondeTomber : 2,
        millisecondeDeplacement : 8,
        largeurDeplacement : 5,
        millisecondeCoucou : 120,
        largeurCoucou : 15,
    },
    SOUS_MER : {
        hauteurSaut : 100,
        millisecondeSaut : 2,
        millisecondeTomber : 2,
        millisecondeDeplacement : 8,
        largeurDeplacement : 5,
        millisecondeCoucou : 120,
        largeurCoucou : 15,
    },
    TERRE : {
        hauteurSaut : 100,
        millisecondeSaut : 2,
        millisecondeTomber : 2,
        millisecondeDeplacement : 8,
        largeurDeplacement : 5,
        millisecondeCoucou : 120,
        largeurCoucou : 15,
    },
    CIEL_NUAGE : {
        hauteurSaut : 100,
        millisecondeSaut : 2,
        millisecondeTomber : 2,
        millisecondeDeplacement : 8,
        largeurDeplacement : 5,
        millisecondeCoucou : 120,
        largeurCoucou : 15,
    },
    CIEL_AVIONS : {
        hauteurSaut : 100,
        millisecondeSaut : 2,
        millisecondeTomber : 2,
        millisecondeDeplacement : 8,
        largeurDeplacement : 5,
        millisecondeCoucou : 120,
        largeurCoucou : 15,
    },
    ESPACE_ASTEROIDE : {
        hauteurSaut : 100,
        millisecondeSaut : 2,
        millisecondeTomber : 2,
        millisecondeDeplacement : 8,
        largeurDeplacement : 5,
        millisecondeCoucou : 120,
        largeurCoucou : 15,
    },
    ESPACE_SATELLITE : {
        hauteurSaut : 100,
        millisecondeSaut : 2,
        millisecondeTomber : 2,
        millisecondeDeplacement : 8,
        largeurDeplacement : 5,
        millisecondeCoucou : 120,
        largeurCoucou : 15,
    },
    ESPACE_VAISSEAU : {
        hauteurSaut : 100,
        millisecondeSaut : 2,
        millisecondeTomber : 2,
        millisecondeDeplacement : 8,
        largeurDeplacement : 5,
        millisecondeCoucou : 120,
        largeurCoucou : 15,
    },
}
function saveLocalConfigGameMoveBackground() {
   
    localStorage.setItem('pixelUpConfigurationsGameMoveBackground', JSON.stringify(tabConfigMoveBackground));
}

function loadLocalConfigGameMoveBackground() {
    var config = localStorage.getItem('pixelUpConfigurationsGameMoveBackground');
    if(config !== undefined && config != "" && config != "null" && config != null) {
    
    tabConfigMoveBackground = JSON.parse(config);
    }
}
document.getElementById("config4").addEventListener("click", function(e){

    document.getElementById("sousTerreHauteurSaut").value = tabConfigMoveBackground.SOUS_TERRE.hauteurSaut;
    document.getElementById("sousTerreMillisecondeSaut").value = tabConfigMoveBackground.SOUS_TERRE.millisecondeSaut;
    document.getElementById("sousTerreMillisecondeTomber").value = tabConfigMoveBackground.SOUS_TERRE.millisecondeTomber;
    document.getElementById("sousTerreMillisecondeDeplacement").value = tabConfigMoveBackground.SOUS_TERRE.millisecondeDeplacement;
    document.getElementById("sousTerreLargeurDeplacement").value = tabConfigMoveBackground.SOUS_TERRE.largeurDeplacement;
    document.getElementById("sousTerreMillisecondeCoucou").value = tabConfigMoveBackground.SOUS_TERRE.millisecondeCoucou;
    document.getElementById("sousTerreLargeurCoucou").value = tabConfigMoveBackground.SOUS_TERRE.largeurCoucou;

    document.getElementById("sousMerHauteurSaut").value = tabConfigMoveBackground.SOUS_MER.hauteurSaut;
    document.getElementById("sousMerMillisecondeSaut").value = tabConfigMoveBackground.SOUS_MER.millisecondeSaut;
    document.getElementById("sousMerMillisecondeTomber").value = tabConfigMoveBackground.SOUS_MER.millisecondeTomber;
    document.getElementById("sousMerMillisecondeDeplacement").value = tabConfigMoveBackground.SOUS_MER.millisecondeDeplacement;
    document.getElementById("sousMerLargeurDeplacement").value = tabConfigMoveBackground.SOUS_MER.largeurDeplacement;
    document.getElementById("sousMerMillisecondeCoucou").value = tabConfigMoveBackground.SOUS_MER.millisecondeCoucou;
    document.getElementById("sousMerLargeurCoucou").value = tabConfigMoveBackground.SOUS_MER.largeurCoucou;

    document.getElementById("terreHauteurSaut").value = tabConfigMoveBackground.TERRE.hauteurSaut;
    document.getElementById("terreMillisecondeSaut").value = tabConfigMoveBackground.TERRE.millisecondeSaut;
    document.getElementById("terreMillisecondeTomber").value = tabConfigMoveBackground.TERRE.millisecondeTomber;
    document.getElementById("terreMillisecondeDeplacement").value = tabConfigMoveBackground.TERRE.millisecondeDeplacement;
    document.getElementById("terreLargeurDeplacement").value = tabConfigMoveBackground.TERRE.largeurDeplacement;
    document.getElementById("terreMillisecondeCoucou").value = tabConfigMoveBackground.TERRE.millisecondeCoucou;
    document.getElementById("terreLargeurCoucou").value = tabConfigMoveBackground.TERRE.largeurCoucou;
   
    document.getElementById("cielNuageHauteurSaut").value = tabConfigMoveBackground.CIEL_NUAGE.hauteurSaut;
    document.getElementById("cielNuageMillisecondeSaut").value = tabConfigMoveBackground.CIEL_NUAGE.millisecondeSaut;
    document.getElementById("cielNuageMillisecondeTomber").value = tabConfigMoveBackground.CIEL_NUAGE.millisecondeTomber;
    document.getElementById("cielNuageMillisecondeDeplacement").value = tabConfigMoveBackground.CIEL_NUAGE.millisecondeDeplacement;
    document.getElementById("cielNuageLargeurDeplacement").value = tabConfigMoveBackground.CIEL_NUAGE.largeurDeplacement;
    document.getElementById("cielNuageMillisecondeCoucou").value = tabConfigMoveBackground.CIEL_NUAGE.millisecondeCoucou;
    document.getElementById("cielNuageLargeurCoucou").value = tabConfigMoveBackground.CIEL_NUAGE.largeurCoucou;

    document.getElementById("cielAvionHauteurSaut").value = tabConfigMoveBackground.CIEL_AVIONS.hauteurSaut;
    document.getElementById("cielAvionMillisecondeSaut").value = tabConfigMoveBackground.CIEL_AVIONS.millisecondeSaut;
    document.getElementById("cielAvionMillisecondeTomber").value = tabConfigMoveBackground.CIEL_AVIONS.millisecondeTomber;
    document.getElementById("cielAvionMillisecondeDeplacement").value = tabConfigMoveBackground.CIEL_AVIONS.millisecondeDeplacement;
    document.getElementById("cielAvionLargeurDeplacement").value = tabConfigMoveBackground.CIEL_AVIONS.largeurDeplacement;
    document.getElementById("cielAvionMillisecondeCoucou").value = tabConfigMoveBackground.CIEL_AVIONS.millisecondeCoucou;
    document.getElementById("cielAvionLargeurCoucou").value = tabConfigMoveBackground.CIEL_AVIONS.largeurCoucou;
    
    document.getElementById("espaceAsteroideHauteurSaut").value = tabConfigMoveBackground.ESPACE_ASTEROIDE.hauteurSaut;
    document.getElementById("espaceAsteroideMillisecondeSaut").value = tabConfigMoveBackground.ESPACE_ASTEROIDE.millisecondeSaut;
    document.getElementById("espaceAsteroideMillisecondeTomber").value = tabConfigMoveBackground.ESPACE_ASTEROIDE.millisecondeTomber;
    document.getElementById("espaceAsteroideMillisecondeDeplacement").value = tabConfigMoveBackground.ESPACE_ASTEROIDE.millisecondeDeplacement;
    document.getElementById("espaceAsteroideLargeurDeplacement").value = tabConfigMoveBackground.ESPACE_ASTEROIDE.largeurDeplacement;
    document.getElementById("espaceAsteroideMillisecondeCoucou").value = tabConfigMoveBackground.ESPACE_ASTEROIDE.millisecondeCoucou;
    document.getElementById("espaceAsteroideLargeurCoucou").value = tabConfigMoveBackground.ESPACE_ASTEROIDE.largeurCoucou;

    document.getElementById("espaceSatelliteHauteurSaut").value = tabConfigMoveBackground.ESPACE_SATELLITE.hauteurSaut;
    document.getElementById("espaceSatelliteMillisecondeSaut").value = tabConfigMoveBackground.ESPACE_SATELLITE.millisecondeSaut;
    document.getElementById("espaceSatelliteMillisecondeTomber").value = tabConfigMoveBackground.ESPACE_SATELLITE.millisecondeTomber;
    document.getElementById("espaceSatelliteMillisecondeDeplacement").value = tabConfigMoveBackground.ESPACE_SATELLITE.millisecondeDeplacement;
    document.getElementById("espaceSatelliteLargeurDeplacement").value = tabConfigMoveBackground.ESPACE_SATELLITE.largeurDeplacement;
    document.getElementById("espaceSatelliteMillisecondeCoucou").value = tabConfigMoveBackground.ESPACE_SATELLITE.millisecondeCoucou;
    document.getElementById("espaceSatelliteLargeurCoucou").value = tabConfigMoveBackground.ESPACE_SATELLITE.largeurCoucou;

    document.getElementById("espaceVaisseauHauteurSaut").value = tabConfigMoveBackground.ESPACE_VAISSEAU.hauteurSaut;
    document.getElementById("espaceVaisseauMillisecondeSaut").value = tabConfigMoveBackground.ESPACE_VAISSEAU.millisecondeSaut;
    document.getElementById("espaceVaisseauMillisecondeTomber").value = tabConfigMoveBackground.ESPACE_VAISSEAU.millisecondeTomber;
    document.getElementById("espaceVaisseauMillisecondeDeplacement").value = tabConfigMoveBackground.ESPACE_VAISSEAU.millisecondeDeplacement;
    document.getElementById("espaceVaisseauLargeurDeplacement").value = tabConfigMoveBackground.ESPACE_VAISSEAU.largeurDeplacement;
    document.getElementById("espaceVaisseauMillisecondeCoucou").value = tabConfigMoveBackground.ESPACE_VAISSEAU.millisecondeCoucou;
    document.getElementById("espaceVaisseauLargeurCoucou").value = tabConfigMoveBackground.ESPACE_VAISSEAU.largeurCoucou;
});

document.getElementById("validerConfigGameMoveBackground").addEventListener("click", function(e) {
    e.preventDefault();

    tabConfigMoveBackground.SOUS_TERRE.hauteurSaut = document.getElementById("sousTerreHauteurSaut").value;
    tabConfigMoveBackground.SOUS_TERRE.millisecondeSaut = document.getElementById("sousTerreMillisecondeSaut").value;
    tabConfigMoveBackground.SOUS_TERRE.millisecondeTomber = document.getElementById("sousTerreMillisecondeTomber").value;
    tabConfigMoveBackground.SOUS_TERRE.millisecondeDeplacement = document.getElementById("sousTerreMillisecondeDeplacement").value;
    tabConfigMoveBackground.SOUS_TERRE.largeurDeplacement = document.getElementById("sousTerreLargeurDeplacement").value;
    tabConfigMoveBackground.SOUS_TERRE.millisecondeCoucou = document.getElementById("sousTerreMillisecondeCoucou").value; 
    tabConfigMoveBackground.SOUS_TERRE.largeurCoucou = document.getElementById("sousTerreLargeurCoucou").value;

    tabConfigMoveBackground.SOUS_MER.hauteurSaut = document.getElementById("sousMerHauteurSaut").value; 
    tabConfigMoveBackground.SOUS_MER.millisecondeSaut = document.getElementById("sousMerMillisecondeSaut").value;
    tabConfigMoveBackground.SOUS_MER.millisecondeTomber = document.getElementById("sousMerMillisecondeTomber").value;
    tabConfigMoveBackground.SOUS_MER.millisecondeDeplacement = document.getElementById("sousMerMillisecondeDeplacement").value;
    tabConfigMoveBackground.SOUS_MER.largeurDeplacement = document.getElementById("sousMerLargeurDeplacement").value;
    tabConfigMoveBackground.SOUS_MER.millisecondeCoucou = document.getElementById("sousMerMillisecondeCoucou").value;
    tabConfigMoveBackground.SOUS_MER.largeurCoucou = document.getElementById("sousMerLargeurCoucou").value;

    tabConfigMoveBackground.TERRE.hauteurSaut = document.getElementById("terreHauteurSaut").value;
    tabConfigMoveBackground.TERRE.millisecondeSaut = document.getElementById("terreMillisecondeSaut").value;
    tabConfigMoveBackground.TERRE.millisecondeTomber = document.getElementById("terreMillisecondeTomber").value;
    tabConfigMoveBackground.TERRE.millisecondeDeplacement = document.getElementById("terreMillisecondeDeplacement").value;
    tabConfigMoveBackground.TERRE.largeurDeplacement = document.getElementById("terreLargeurDeplacement").value;
    tabConfigMoveBackground.TERRE.millisecondeCoucou = document.getElementById("terreMillisecondeCoucou").value;
    tabConfigMoveBackground.TERRE.largeurCoucou = document.getElementById("terreLargeurCoucou").value;
   
    tabConfigMoveBackground.CIEL_NUAGE.hauteurSaut = document.getElementById("cielNuageHauteurSaut").value;
    tabConfigMoveBackground.CIEL_NUAGE.millisecondeSaut = document.getElementById("cielNuageMillisecondeSaut").value;
    tabConfigMoveBackground.CIEL_NUAGE.millisecondeTomber = document.getElementById("cielNuageMillisecondeTomber").value;
    tabConfigMoveBackground.CIEL_NUAGE.millisecondeDeplacement = document.getElementById("cielNuageMillisecondeDeplacement").value;
    tabConfigMoveBackground.CIEL_NUAGE.largeurDeplacement = document.getElementById("cielNuageLargeurDeplacement").value;
    tabConfigMoveBackground.CIEL_NUAGE.millisecondeCoucou = document.getElementById("cielNuageMillisecondeCoucou").value;
    tabConfigMoveBackground.CIEL_NUAGE.largeurCoucou = document.getElementById("cielNuageLargeurCoucou").value;

    tabConfigMoveBackground.CIEL_AVIONS.hauteurSaut = document.getElementById("cielAvionHauteurSaut").value;
    tabConfigMoveBackground.CIEL_AVIONS.millisecondeSaut = document.getElementById("cielAvionMillisecondeSaut").value;
    tabConfigMoveBackground.CIEL_AVIONS.millisecondeTomber = document.getElementById("cielAvionMillisecondeTomber").value; 
    tabConfigMoveBackground.CIEL_AVIONS.millisecondeDeplacement = document.getElementById("cielAvionMillisecondeDeplacement").value;
    tabConfigMoveBackground.CIEL_AVIONS.largeurDeplacement = document.getElementById("cielAvionLargeurDeplacement").value;
    tabConfigMoveBackground.CIEL_AVIONS.millisecondeCoucou = document.getElementById("cielAvionMillisecondeCoucou").value;
    tabConfigMoveBackground.CIEL_AVIONS.largeurCoucou = document.getElementById("cielAvionLargeurCoucou").value;
    
    tabConfigMoveBackground.ESPACE_ASTEROIDE.hauteurSaut = document.getElementById("espaceAsteroideHauteurSaut").value;
    tabConfigMoveBackground.ESPACE_ASTEROIDE.millisecondeSaut = document.getElementById("espaceAsteroideMillisecondeSaut").value;
    tabConfigMoveBackground.ESPACE_ASTEROIDE.millisecondeTomber = document.getElementById("espaceAsteroideMillisecondeTomber").value;
    tabConfigMoveBackground.ESPACE_ASTEROIDE.millisecondeDeplacement = document.getElementById("espaceAsteroideMillisecondeDeplacement").value;
    tabConfigMoveBackground.ESPACE_ASTEROIDE.largeurDeplacement = document.getElementById("espaceAsteroideLargeurDeplacement").value;
    tabConfigMoveBackground.ESPACE_ASTEROIDE.millisecondeCoucou = document.getElementById("espaceAsteroideMillisecondeCoucou").value;
    tabConfigMoveBackground.ESPACE_ASTEROIDE.largeurCoucou = document.getElementById("espaceAsteroideLargeurCoucou").value;

    tabConfigMoveBackground.ESPACE_SATELLITE.hauteurSaut = document.getElementById("espaceSatelliteHauteurSaut").value;
    tabConfigMoveBackground.ESPACE_SATELLITE.millisecondeSaut = document.getElementById("espaceSatelliteMillisecondeSaut").value;
    tabConfigMoveBackground.ESPACE_SATELLITE.millisecondeTomber = document.getElementById("espaceSatelliteMillisecondeTomber").value;
    tabConfigMoveBackground.ESPACE_SATELLITE.millisecondeDeplacement = document.getElementById("espaceSatelliteMillisecondeDeplacement").value;
    tabConfigMoveBackground.ESPACE_SATELLITE.largeurDeplacement = document.getElementById("espaceSatelliteLargeurDeplacement").value;
    tabConfigMoveBackground.ESPACE_SATELLITE.millisecondeCoucou = document.getElementById("espaceSatelliteMillisecondeCoucou").value;
    tabConfigMoveBackground.ESPACE_SATELLITE.largeurCoucou = document.getElementById("espaceSatelliteLargeurCoucou").value;

    tabConfigMoveBackground.ESPACE_VAISSEAU.hauteurSaut = document.getElementById("espaceVaisseauHauteurSaut").value;
    tabConfigMoveBackground.ESPACE_VAISSEAU.millisecondeSaut = document.getElementById("espaceVaisseauMillisecondeSaut").value;
    tabConfigMoveBackground.ESPACE_VAISSEAU.millisecondeTomber = document.getElementById("espaceVaisseauMillisecondeTomber").value;
    tabConfigMoveBackground.ESPACE_VAISSEAU.millisecondeDeplacement = document.getElementById("espaceVaisseauMillisecondeDeplacement").value;
    tabConfigMoveBackground.ESPACE_VAISSEAU.largeurDeplacement = document.getElementById("espaceVaisseauLargeurDeplacement").value;
    tabConfigMoveBackground.ESPACE_VAISSEAU.millisecondeCoucou = document.getElementById("espaceVaisseauMillisecondeCoucou").value;
    tabConfigMoveBackground.ESPACE_VAISSEAU.largeurCoucou = document.getElementById("espaceVaisseauLargeurCoucou").value; 

    saveLocalConfigGameMoveBackground();
});

loadLocalConfigGameMoveBackground();