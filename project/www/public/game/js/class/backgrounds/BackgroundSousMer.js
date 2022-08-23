class BackgroundSousMer extends Background {



    constructor(idBackground, taille, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille, imgBack, imgBas)
        
    }

    imgBackDisplay(canvas) {
        this.imageSrc("./img/mer5.png");
        let sousMer = new Images(this.imageSource, this.pos, this.taille);
        sousMer.setBackground(this);
        sousMer.afficher(canvas);
    }




}