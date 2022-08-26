class BackgroundSousTerre extends Background {



    constructor(idBackground, taille, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille, imgBack, imgBas);
        this.creerPlatforme(50, 300, 25, 80);
        this.creerPlatformeBottom(new PlateformeFeu());
        this.creerPlateformeTenue(new TenueMer());
        this.creerPlateformePourTenue(new PlateformeTenueMer());
        
    }

    imgBackDisplay(canvas) {
        this.imageSrc("./img/roche2.jpg");
        let sousTerre = new Images(this.imageSource, this.pos, this.taille);
        sousTerre.setBackground(this);
        sousTerre.afficher(canvas);
    }

    choixPlateforme(){
        return new PlateformePierre();
    }



}