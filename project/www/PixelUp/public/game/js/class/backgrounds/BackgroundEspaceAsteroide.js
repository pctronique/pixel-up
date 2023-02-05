class BackgroundEspaceAsteroide extends Background {



    constructor(allImage, idBackground, taille, scrollMove = undefined, tabConfig = undefined, configMoveUser = undefined, imgBack = undefined, imgBas = undefined) {
        super(allImage, idBackground, taille,  scrollMove, tabConfig, configMoveUser, imgBack, imgBas);
        if(tabConfig == undefined) {
            this.creerPlatforme(50, 300, 25, 80);
        } else {
            this.creerPlatforme(tabConfig.minX, tabConfig.maxX, tabConfig.minY, tabConfig.maxY);
        }
        this.creerPlatformeBottom(new PlateformeMeteoritesFeu(this.allImage));
        this.creerPlateformeTenue(undefined);
        this.setTenueBackground(EnumTenues.ESPACE);
    }

    imgBackDisplay(canvas) {
        //this.imageSrc(this.allImage.recupImgData("bkg_asteroides"));
        let backgroundEspaceAsteroide = new Images(this.allImage.recupImg("bkg_asteroides"), this.pos, this.taille);
        backgroundEspaceAsteroide.setBackground(this);
        backgroundEspaceAsteroide.afficher(canvas);
    }

    typeMortTenue() {
      return EnumTypeMort.TENUE_ESPACE;
    }

    choixPlateforme(taille){
        return new PlateformeMobileAsteroide(this.allImage, taille);
    }



}