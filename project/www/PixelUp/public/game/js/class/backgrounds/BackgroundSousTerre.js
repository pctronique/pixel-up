class BackgroundSousTerre extends Background {

    constructor(idBackground, taille, scrollMove = undefined, tabConfig = undefined, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille,  scrollMove, tabConfig, imgBack, imgBas);
        if(tabConfig == undefined) {
            this.creerPlatforme(50, 300, 25, 80);
        } else {
            this.creerPlatforme(tabConfig.minX, tabConfig.maxX, tabConfig.minY, tabConfig.maxY);
        }
        this.creerPlatformeBottom(new PlateformeFeu());
        this.creerPlateformeTenue(new TenueMer());
        this.creerPlateformePourTenue(new PlateformeTenueMer(), new Position(-30,36));
        this.setTenueBackground(EnumTenues.NORMAL);

        let pos = new Position(0, this.taille.y - 1);
        let taille0 = new Taille(this.taille.x, 10);
        let plateforme = new PlateformeSolid(taille0);
        plateforme.setPosition(pos);
        plateforme.setBackground(this);
        this.plateformes.push(plateforme);
    }

    imgBackDisplay(canvas) {
        this.imageSrc("./img/sousTerreManu_coupe.png");
        let sousTerre = new Images(this.imageSource, this.pos, this.taille);
        sousTerre.setBackground(this);
        sousTerre.afficher(canvas);
    }

    typeMortTenue() {
      return EnumTypeMort.TENUE_NORMAL;
    }

    choixPlateforme(){
        return new PlateformePierre();
    }

}