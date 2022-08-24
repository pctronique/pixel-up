class BackgroundEspaceSatellite extends Background {



    constructor(idBackground, taille, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille, imgBack, imgBas);
        this.creerPlatforme(50, 300, 25, 80);
        
    }

    imgBackDisplay(canvas) {
        this.imageSrc("./img/fondEspace3.jpg");
        let espaceSatellite = new Images(this.imageSource, this.pos, this.taille);
        espaceSatellite.setBackground(this);
        espaceSatellite.afficher(canvas);
    }

    choixPlateforme(){
        return new PlateformeMobileSatellite();
    }



}