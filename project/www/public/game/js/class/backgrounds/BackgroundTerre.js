class BackgroundTerre extends Background {



    constructor(idBackground, taille, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille, imgBack, imgBas);
        this.creerPlatforme(50, 300, 25, 80);
        
    }

    imgBackDisplay(canvas) {
        this.imageSrc("./img/immeuble2.png");
        let Terre = new Images(this.imageSource, this.pos, this.taille);
        Terre.setBackground(this);
        Terre.afficher(canvas);
    }

    choixPlateforme(){
        return new PlateformeNacelles();
    }



}