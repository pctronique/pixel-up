class BackgroundEspaceAsteroide extends Background {



    constructor(idBackground, taille, scrollMove = undefined, tabConfig = undefined, configMoveUser = undefined, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille,  scrollMove, tabConfig, configMoveUser, imgBack, imgBas);
        if(tabConfig == undefined) {
            this.creerPlatforme(50, 300, 25, 80);
        } else {
            this.creerPlatforme(tabConfig.minX, tabConfig.maxX, tabConfig.minY, tabConfig.maxY);
        }
        this.creerPlatformeBottom(new PlateformeMeteoritesFeu());
        this.creerPlateformeTenue(undefined);
        this.setTenueBackground(EnumTenues.ESPACE);
    }

    imgBackDisplay(canvas) {
        this.imageSrc("./img/fondEspace2.jpg");
        let backgroundEspaceAsteroide = new Images(this.imageSource, this.pos, this.taille);
        backgroundEspaceAsteroide.setBackground(this);
        backgroundEspaceAsteroide.afficher(canvas);
    }

    typeMortTenue() {
      return EnumTypeMort.TENUE_ESPACE;
    }

    choixPlateforme(taille){
        return new PlateformeMobileAsteroide(taille);
    }



}