let tabConfigBackground = {
    SOUS_TERRE : {
        minX : 50,
        maxX : 300,
        minY : 25,
        maxY : 80,
        nbPiege : {
            nbPgLine : -1,
            nbPgSepareLine : -1,
            nbPgTotal : -1,
        }
    },
    SOUS_MER : {
        minX : 50,
        maxX : 300,
        minY : 25,
        maxY : 80,
        nbPiege : {
            nbPgLine : 1,
            nbPgSepareLine : 4,
            nbPgTotal : -1,
        }
    },
    TERRE : {
        minX : 50,
        maxX : 300,
        minY : 25,
        maxY : 80,
        nbPiege : {
            nbPgLine : -1,
            nbPgSepareLine : -1,
            nbPgTotal : -1,
        }
    },
    CIEL_NUAGE : {
        minX : 50,
        maxX : 300,
        minY : 25,
        maxY : 80,
        nbPiege : {
            nbPgLine : -1,
            nbPgSepareLine : -1,
            nbPgTotal : -1,
        }
    },
    CIEL_AVIONS : {
        minX : 50,
        maxX : 300,
        minY : 25,
        maxY : 80,
        nbPiege : {
            nbPgLine : -1,
            nbPgSepareLine : -1,
            nbPgTotal : -1,
        }
    },
    ESPACE_ASTEROIDE : {
        minX : 50,
        maxX : 300,
        minY : 25,
        maxY : 80,
        nbPiege : {
            nbPgLine : -1,
            nbPgSepareLine : -1,
            nbPgTotal : -1,
        }
    },
    ESPACE_SATELLITE : {
        minX : 50,
        maxX : 300,
        minY : 25,
        maxY : 80,
        nbPiege : {
            nbPgLine : -1,
            nbPgSepareLine : -1,
            nbPgTotal : -1,
        }
    },
    ESPACE_VAISSEAU : {
        minX : 50,
        maxX : 300,
        minY : 25,
        maxY : 80,
        nbPiege : {
            nbPgLine : -1,
            nbPgSepareLine : -1,
            nbPgTotal : -1,
        }
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
    document.getElementById("sousTerreNbPgLine").value = tabConfigBackground.SOUS_TERRE.nbPiege.nbPgLine;
    document.getElementById("sousTerreNbPgSepareLine").value = tabConfigBackground.SOUS_TERRE.nbPiege.nbPgSepareLine;
    document.getElementById("sousTerreNbPgTotal").value = tabConfigBackground.SOUS_TERRE.nbPiege.nbPgTotal;

    document.getElementById("sousMerMinX").value = tabConfigBackground.SOUS_MER.minX;
    document.getElementById("sousMerMaxX").value = tabConfigBackground.SOUS_MER.maxX;
    document.getElementById("sousMerMinY").value = tabConfigBackground.SOUS_MER.minY;
    document.getElementById("sousMerMaxY").value = tabConfigBackground.SOUS_MER.maxX;
    document.getElementById("sousMerNbPgLine").value = tabConfigBackground.SOUS_MER.nbPiege.nbPgLine;
    document.getElementById("sousMerNbPgSepareLine").value = tabConfigBackground.SOUS_MER.nbPiege.nbPgSepareLine;
    document.getElementById("sousMerNbPgTotal").value = tabConfigBackground.SOUS_MER.nbPiege.nbPgTotal;


    document.getElementById("terreMinX").value = tabConfigBackground.TERRE.minX;
    document.getElementById("terreMaxX").value = tabConfigBackground.TERRE.maxX;
    document.getElementById("terreMinY").value = tabConfigBackground.TERRE.minY;
    document.getElementById("terreMaxY").value = tabConfigBackground.TERRE.maxX;
    document.getElementById("terreNbPgLine").value = tabConfigBackground.TERRE.nbPiege.nbPgLine;
    document.getElementById("terreNbPgSepareLine").value = tabConfigBackground.TERRE.nbPiege.nbPgSepareLine;
    document.getElementById("terreNbPgTotal").value = tabConfigBackground.TERRE.nbPiege.nbPgTotal;


    document.getElementById("cielNuagesMinX").value = tabConfigBackground.CIEL_NUAGE.minX;
    document.getElementById("cielNuagesMaxX").value = tabConfigBackground.CIEL_NUAGE.maxX;
    document.getElementById("cielNuagesMinY").value = tabConfigBackground.CIEL_NUAGE.minY;
    document.getElementById("cielNuagesMaxY").value = tabConfigBackground.CIEL_NUAGE.maxX;
    document.getElementById("cielNuagesNbPgLine").value = tabConfigBackground.CIEL_NUAGE.nbPiege.nbPgLine;
    document.getElementById("cielNuagesNbPgSepareLine").value = tabConfigBackground.CIEL_NUAGE.nbPiege.nbPgSepareLine;
    document.getElementById("cielNuagesNbPgTotal").value = tabConfigBackground.CIEL_NUAGE.nbPiege.nbPgTotal;


    document.getElementById("cielAvionMinX").value = tabConfigBackground.CIEL_AVIONS.minX;
    document.getElementById("cielAvionMaxX").value = tabConfigBackground.CIEL_AVIONS.maxX;
    document.getElementById("cielAvionMinY").value = tabConfigBackground.CIEL_AVIONS.minY;
    document.getElementById("cielAvionMaxY").value = tabConfigBackground.CIEL_AVIONS.maxX;
    document.getElementById("cielAvionNbPgLine").value = tabConfigBackground.CIEL_AVIONS.nbPiege.nbPgLine;
    document.getElementById("cielAvionNbPgSepareLine").value = tabConfigBackground.CIEL_AVIONS.nbPiege.nbPgSepareLine;
    document.getElementById("cielAvionNbPgTotal").value = tabConfigBackground.CIEL_AVIONS.nbPiege.nbPgTotal;

    document.getElementById("espaceAsteroideMinX").value = tabConfigBackground.ESPACE_ASTEROIDE.minX;
    document.getElementById("espaceAsteroideMaxX").value = tabConfigBackground.ESPACE_ASTEROIDE.maxX;
    document.getElementById("espaceAsteroideMinY").value = tabConfigBackground.ESPACE_ASTEROIDE.minY;
    document.getElementById("espaceAsteroideMaxY").value = tabConfigBackground.ESPACE_ASTEROIDE.maxX;
    document.getElementById("espaceAsteroideNbPgLine").value = tabConfigBackground.ESPACE_ASTEROIDE.nbPiege.nbPgLine;
    document.getElementById("espaceAsteroideNbPgSepareLine").value = tabConfigBackground.ESPACE_ASTEROIDE.nbPiege.nbPgSepareLine;
    document.getElementById("espaceAsteroideNbPgTotal").value = tabConfigBackground.ESPACE_ASTEROIDE.nbPiege.nbPgTotal;


    document.getElementById("espaceSatelliteMinX").value = tabConfigBackground.ESPACE_SATELLITE.minX;
    document.getElementById("espaceSatelliteMaxX").value = tabConfigBackground.ESPACE_SATELLITE.maxX;
    document.getElementById("espaceSatelliteMinY").value = tabConfigBackground.ESPACE_SATELLITE.minY;
    document.getElementById("espaceSatelliteMaxY").value = tabConfigBackground.ESPACE_SATELLITE.maxX;
    document.getElementById("espaceSatelliteNbPgLine").value = tabConfigBackground.ESPACE_SATELLITE.nbPiege.nbPgLine;
    document.getElementById("espaceSatelliteNbPgSepareLine").value = tabConfigBackground.ESPACE_SATELLITE.nbPiege.nbPgSepareLine;
    document.getElementById("espaceSatelliteNbPgTotal").value = tabConfigBackground.ESPACE_SATELLITE.nbPiege.nbPgTotal;


    document.getElementById("espaceVaisseauMinX").value = tabConfigBackground.ESPACE_VAISSEAU.minX;
    document.getElementById("espaceVaisseauMaxX").value = tabConfigBackground.ESPACE_VAISSEAU.maxX;
    document.getElementById("espaceVaisseauMinY").value = tabConfigBackground.ESPACE_VAISSEAU.minY;
    document.getElementById("espaceVaisseauMaxY").value = tabConfigBackground.ESPACE_VAISSEAU.maxX;
    document.getElementById("espaceVaisseauNbPgLine").value = tabConfigBackground.ESPACE_VAISSEAU.nbPiege.nbPgLine;
    document.getElementById("espaceVaisseauNbPgSepareLine").value = tabConfigBackground.ESPACE_VAISSEAU.nbPiege.nbPgSepareLine;
    document.getElementById("espaceVaisseauNbPgTotal").value = tabConfigBackground.ESPACE_VAISSEAU.nbPiege.nbPgTotal;
});

document.getElementById("validerConfigBackground").addEventListener("click", function(e) {
    e.preventDefault();

    tabConfigBackground.SOUS_TERRE.minX = document.getElementById("sousTerreMinX").value; 
    tabConfigBackground.SOUS_TERRE.maxX = document.getElementById("sousTerreMaxX").value; 
    tabConfigBackground.SOUS_TERRE.minY = document.getElementById("sousTerreMinY").value; 
    tabConfigBackground.SOUS_TERRE.maxX = document.getElementById("sousTerreMaxY").value;
    tabConfigBackground.SOUS_TERRE.nbPiege.nbPgLine = document.getElementById("sousTerreNbPgLine").value;
    tabConfigBackground.SOUS_TERRE.nbPiege.nbPgSepareLine = document.getElementById("sousTerreNbPgSepareLine").value; 
    tabConfigBackground.SOUS_TERRE.nbPiege.nbPgTotal = document.getElementById("sousTerreNbPgTotal").value;


    tabConfigBackground.SOUS_MER.minX = document.getElementById("sousMerMinX").value; 
    tabConfigBackground.SOUS_MER.maxX = document.getElementById("sousMerMaxX").value;
    tabConfigBackground.SOUS_MER.minY = document.getElementById("sousMerMinY").value;
    tabConfigBackground.SOUS_MER.maxX = document.getElementById("sousMerMaxY").value;
    tabConfigBackground.SOUS_MER.nbPiege.nbPgLine = document.getElementById("sousMerNbPgLine").value;
    tabConfigBackground.SOUS_MER.nbPiege.nbPgSepareLine = document.getElementById("sousMerNbPgSepareLine").value;
    tabConfigBackground.SOUS_MER.nbPiege.nbPgTotal = document.getElementById("sousMerNbPgTotal").value; 



    tabConfigBackground.TERRE.minX = document.getElementById("terreMinX").value;
    tabConfigBackground.TERRE.maxX = document.getElementById("terreMaxX").value;
    tabConfigBackground.TERRE.minY = document.getElementById("terreMinY").value;
    tabConfigBackground.TERRE.maxX = document.getElementById("terreMaxY").value;
    tabConfigBackground.TERRE.nbPiege.nbPgLine = document.getElementById("terreNbPgLine").value;
    tabConfigBackground.TERRE.nbPiege.nbPgSepareLine = document.getElementById("terreNbPgSepareLine").value;
    tabConfigBackground.TERRE.nbPiege.nbPgTotal = document.getElementById("terreNbPgTotal").value;


    tabConfigBackground.CIEL_NUAGE.minX = document.getElementById("cielNuagesMinX").value;
    tabConfigBackground.CIEL_NUAGE.maxX = document.getElementById("cielNuagesMaxX").value; 
    tabConfigBackground.CIEL_NUAGE.minY = document.getElementById("cielNuagesMinY").value;
    tabConfigBackground.CIEL_NUAGE.maxX = document.getElementById("cielNuagesMaxY").value;
    tabConfigBackground.CIEL_NUAGE.nbPiege.nbPgLine = document.getElementById("cielNuagesNbPgLine").value; 
    tabConfigBackground.CIEL_NUAGE.nbPiege.nbPgSepareLine = document.getElementById("cielNuagesNbPgSepareLine").value;
    tabConfigBackground.CIEL_NUAGE.nbPiege.nbPgTotal = document.getElementById("cielNuagesNbPgTotal").value;


    tabConfigBackground.CIEL_AVIONS.minX = document.getElementById("cielAvionMinX").value; 
    tabConfigBackground.CIEL_AVIONS.maxX = document.getElementById("cielAvionMaxX").value;
    tabConfigBackground.CIEL_AVIONS.minY = document.getElementById("cielAvionMinY").value;
    tabConfigBackground.CIEL_AVIONS.maxX = document.getElementById("cielAvionMaxY").value;
    tabConfigBackground.CIEL_AVIONS.nbPiege.nbPgLine = document.getElementById("cielAvionNbPgLine").value;
    tabConfigBackground.CIEL_AVIONS.nbPiege.nbPgSepareLine = document.getElementById("cielAvionNbPgSepareLine").value;
    tabConfigBackground.CIEL_AVIONS.nbPiege.nbPgTotal = document.getElementById("cielAvionNbPgTotal").value;


    tabConfigBackground.ESPACE_ASTEROIDE.minX = document.getElementById("espaceAsteroideMinX").value;
    tabConfigBackground.ESPACE_ASTEROIDE.maxX = document.getElementById("espaceAsteroideMaxX").value; 
    tabConfigBackground.ESPACE_ASTEROIDE.minY = document.getElementById("espaceAsteroideMinY").value;
    tabConfigBackground.ESPACE_ASTEROIDE.maxX = document.getElementById("espaceAsteroideMaxY").value; 
    tabConfigBackground.ESPACE_ASTEROIDE.nbPiege.nbPgLine = document.getElementById("espaceAsteroideNbPgLine").value; 
    tabConfigBackground.ESPACE_ASTEROIDE.nbPiege.nbPgSepareLine = document.getElementById("espaceAsteroideNbPgSepareLine").value;
    tabConfigBackground.ESPACE_ASTEROIDE.nbPiege.nbPgTotal = document.getElementById("espaceAsteroideNbPgTotal").value;


    tabConfigBackground.ESPACE_SATELLITE.minX = document.getElementById("espaceSatelliteMinX").value; 
    tabConfigBackground.ESPACE_SATELLITE.maxX = document.getElementById("espaceSatelliteMaxX").value;
    tabConfigBackground.ESPACE_SATELLITE.minY = document.getElementById("espaceSatelliteMinY").value;
    tabConfigBackground.ESPACE_SATELLITE.maxX = document.getElementById("espaceSatelliteMaxY").value;
    tabConfigBackground.ESPACE_SATELLITE.nbPiege.nbPgLine = document.getElementById("espaceSatelliteNbPgLine").value;
    tabConfigBackground.ESPACE_SATELLITE.nbPiege.nbPgSepareLine = document.getElementById("espaceSatelliteNbPgSepareLine").value;
    tabConfigBackground.ESPACE_SATELLITE.nbPiege.nbPgTotal = document.getElementById("espaceSatelliteNbPgTotal").value;



    tabConfigBackground.ESPACE_VAISSEAU.minX = document.getElementById("espaceVaisseauMinX").value;
    tabConfigBackground.ESPACE_VAISSEAU.maxX = document.getElementById("espaceVaisseauMaxX").value;
    tabConfigBackground.ESPACE_VAISSEAU.minY = document.getElementById("espaceVaisseauMinY").value; 
    tabConfigBackground.ESPACE_VAISSEAU.maxX = document.getElementById("espaceVaisseauMaxY").value; 
    tabConfigBackground.ESPACE_VAISSEAU.nbPiege.nbPgLine = document.getElementById("espaceVaisseauNbPgLine").value;
    tabConfigBackground.ESPACE_VAISSEAU.nbPiege.nbPgSepareLine = document.getElementById("espaceVaisseauNbPgSepareLine").value;
    tabConfigBackground.ESPACE_VAISSEAU.nbPiege.nbPgTotal = document.getElementById("espaceVaisseauNbPgTotal").value;



    saveLocalConfigBackground();

});
loadLocalConfigBackground();