class BackgroundEspaceSatellite extends Background {



    constructor(idBackground, taille, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille, imgBack, imgBas);
        this.creerPlatformeBottom(new PlateformeMeteoritesFeu());
        this.creerPlateformeTenue(undefined);
        
    }

    imgBackDisplay(canvas) {
        this.imageSrc("./img/fondEspace3.jpg");
        let espaceSatellite = new Images(this.imageSource, this.pos, this.taille);
        espaceSatellite.setBackground(this);
        espaceSatellite.afficher(canvas);
    }

    choixPlateforme(taille){
        return new PlateformeMobileSatellite(taille);
    }



}