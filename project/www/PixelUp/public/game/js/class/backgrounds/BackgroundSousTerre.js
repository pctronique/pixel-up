class BackgroundSousTerre extends Background {

    constructor(idBackground, taille, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille, imgBack, imgBas);
        this.creerPlatforme(50, 300, 25, 80);
        this.creerPlatformeBottom(new PlateformeFeu());
        this.creerPlateformeTenue(new TenueMer());
        this.creerPlateformePourTenue(new PlateformeTenueMer(), new Position(-30,36));

        let pos = new Position(0, this.taille.y - 1);
        let taille0 = new Taille(this.taille.x, 10);
        let plateforme = new Plateforme(taille0);
        plateforme.setPosition(pos);
        plateforme.setBackground(this);
        this.plateformes.push(plateforme);
        
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