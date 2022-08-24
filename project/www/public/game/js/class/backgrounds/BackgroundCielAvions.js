class BackgroundCielAvions extends Background {



    constructor(idBackground, taille, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille, imgBack, imgBas);
        this.creerPlatforme(50, 300, 25, 80);

    }

    imgBackDisplay(canvas) {
        this.imageSrc("./img/ciel.png");
        let cielAvions = new Images(this.imageSource, this.pos, this.taille);
        cielAvions.setBackground(this);
        cielAvions.afficher(canvas);
    }

    choixPlateforme() {

        return new PlateformeAvions();
    }

}


