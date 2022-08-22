class BackgroundEspaceSatellite extends Background {



    constructor(idBackground, taille, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille, imgBack, imgBas)
        
    }

    afficher() {
        this.imageSrc("./img/fondEspace3.jpg");
        let espaceSatellite = new Images(this.imageSource, this.pos, this.taille);
        espaceSatellite.afficher(this.idBackground);
    }




}