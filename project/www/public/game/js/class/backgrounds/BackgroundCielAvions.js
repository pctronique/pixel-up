class BackgroundCielAvions extends Background {



    constructor(idBackground, taille, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille, imgBack, imgBas);
        this.creerPlatformeBottom(new PlateformeHelicopteres());
        this.creerPlateformeTenue(new TenueEspace());
        this.creerPlateformePourTenue(new PlateformeTenueEspace());

    }

    imgBackDisplay(canvas) {
        this.imageSrc("./img/ciel.png");
        let cielAvions = new Images(this.imageSource, this.pos, this.taille);
        cielAvions.setBackground(this);
        cielAvions.afficher(canvas);
    }

    choixPlateforme(taille) {

        return new PlateformeAvions(taille);
    }

}


