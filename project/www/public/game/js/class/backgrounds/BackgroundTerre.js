class BackgroundTerre extends Background {



    constructor(idBackground, taille, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille, imgBack, imgBas);
        this.creerPlatformeBottom(new PlateformeLave());
        this.creerPlateformeTenue(new TenueCiel());
        this.creerPlateformePourTenue(new PlateformeTenueCiel());
        
    }

    imgBackDisplay(canvas) {
        this.imageSrc("./img/immeuble2.png");
        let Terre = new Images(this.imageSource, this.pos, this.taille);
        Terre.setBackground(this);
        Terre.afficher(canvas);
    }

    choixPlateforme(taille){
        return new PlateformeNacelles(taille);
    }



}