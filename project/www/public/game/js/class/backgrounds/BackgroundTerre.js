class BackgroundTerre extends Background {



    constructor(idBackground, taille, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille, imgBack, imgBas)
        
    }

    afficher() {
        this.imageSrc("./img/immeuble2.png");
        let Terre = new Images(this.imageSource, this.pos, this.taille);
        Terre.afficher(this.idBackground);
    }




}