class BackgroundEspaceAsteroide extends Background {



    constructor(idBackground, taille, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille, imgBack, imgBas)
        
    }

    imgBackDisplay(canvas) {
        this.imageSrc("./img/fondEspace2.jpg");
        let backgroundEspaceAsteroide = new Images(this.imageSource, this.pos, this.taille);
        backgroundEspaceAsteroide.setBackground(this);
        backgroundEspaceAsteroide.afficher(canvas);
    }

    choixPlateforme(taille){
        return new PlateformeMobileAsteroide(taille);
    }



}