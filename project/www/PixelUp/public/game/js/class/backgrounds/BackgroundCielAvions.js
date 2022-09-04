class BackgroundCielAvions extends Background {

    constructor(allImage, idBackground, taille, scrollMove = undefined, tabConfig = undefined, configMoveUser = undefined, imgBack = undefined, imgBas = undefined) {
        super(allImage, idBackground, taille,  scrollMove, tabConfig, configMoveUser, imgBack, imgBas);
        if(tabConfig == undefined) {
            this.creerPlatforme(50, 300, 25, 80);
        } else {
            this.creerPlatforme(tabConfig.minX, tabConfig.maxX, tabConfig.minY, tabConfig.maxY);
        }
        this.creerPlatformeBottom(new PlateformeHelicopteres(this.allImage));
        this.creerPlateformeTenue(new TenueEspace(this.allImage));
        this.creerPlateformePourTenue(new PlateformeTenueEspace(this.allImage), new Position(-25,39));
        this.setTenueBackground(EnumTenues.CIEL);
    }

    typeMortTenue() {
      return EnumTypeMort.TENUE_CIEL;
    }

    imgBackDisplay(canvas) {
        //this.imageSrc(this.allImage.recupImg("bkg_ciel_avions"));
        let cielAvions = new Images(this.allImage.recupImg("bkg_ciel_avions"), this.pos, this.taille);
        cielAvions.setBackground(this);
        cielAvions.afficher(canvas);
    }

    choixPlateforme() {
        return new PlateformeAvions(this.allImage);
    }

}


