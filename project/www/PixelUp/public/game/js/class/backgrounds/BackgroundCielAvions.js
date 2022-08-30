class BackgroundCielAvions extends Background {



    constructor(idBackground, taille, scrollMove = undefined, tabConfig = undefined, configMoveUser = undefined, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille,  scrollMove, tabConfig, configMoveUser, imgBack, imgBas);
        if(tabConfig == undefined) {
            this.creerPlatforme(50, 300, 25, 80);
        } else {
            this.creerPlatforme(tabConfig.minX, tabConfig.maxX, tabConfig.minY, tabConfig.maxY);
        }
        this.creerPlatformeBottom(new PlateformeHelicopteres());
        this.creerPlateformeTenue(new TenueEspace());
        this.creerPlateformePourTenue(new PlateformeTenueEspace(), new Position(-25,39));
        this.setTenueBackground(EnumTenues.CIEL);
    }

    typeMortTenue() {
      return EnumTypeMort.TENUE_CIEL;
    }

    imgBackDisplay(canvas) {
        this.imageSrc("./img/pixil-frame-0 (12).png");
        let cielAvions = new Images(this.imageSource, this.pos, this.taille);
        cielAvions.setBackground(this);
        cielAvions.afficher(canvas);
    }

    choixPlateforme() {

        return new PlateformeAvions();
    }

}


