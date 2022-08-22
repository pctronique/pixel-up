class BackgroundCielNuages extends Background {



    constructor(idBackground, taille, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille, imgBack, imgBas)
        
    }

    afficher() {
        this.imageSrc("./img/cielNuage.png");
        let cielNuages = new Images(this.imageSource, this.pos, this.taille);
        cielNuages.afficher(this.idBackground);
    }




}