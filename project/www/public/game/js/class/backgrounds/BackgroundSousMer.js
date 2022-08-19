class BackgroundSousMer extends Background {



    constructor(idBackground, taille, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille, imgBack, imgBas)
        
    }

    afficher() {
        this.imageSrc("./img/mer.webp");
        let sousMer = new Images(this.imageSource, this.pos, this.taille);
        sousMer.afficher(this.idBackground);
    }




}