class BackgroundEspaceAsteroide extends Background {



    constructor(idBackground, taille, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille, imgBack, imgBas)
        
    }

    afficher() {
        this.imageSrc("./img/fondEspace2.jpg");
        let backgroundEspaceAsteroide = new Images(this.imageSource, this.pos, this.taille);
        backgroundEspaceAsteroide.afficher(this.idBackground);
    }




}