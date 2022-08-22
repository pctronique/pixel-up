class BackgroundSousTerre extends Background {



    constructor(idBackground, taille, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille, imgBack, imgBas)
        
    }

    afficher() {
        this.imageSrc("./img/roche2.jpg");
        let sousTerre = new Images(this.imageSource, this.pos, this.taille);
        sousTerre.afficher(this.idBackground);
    }




}