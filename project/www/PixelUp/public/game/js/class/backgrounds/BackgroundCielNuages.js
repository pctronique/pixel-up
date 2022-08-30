class BackgroundCielNuages extends Background {



    constructor(idBackground, taille, scrollMove = undefined, tabConfig = undefined, configMoveUser = undefined, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille,  scrollMove, tabConfig, configMoveUser, imgBack, imgBas);
        if(tabConfig == undefined) {
            this.creerPlatforme(50, 300, 25, 80);
        } else {
            this.creerPlatforme(tabConfig.minX, tabConfig.maxX, tabConfig.minY, tabConfig.maxY);
        }
        this.creerPlatformeBottom(new PlateformeHelicopteres());
        this.creerPlateformeTenue(undefined);
        this.setTenueBackground(EnumTenues.CIEL);
    }

    imgBackDisplay(canvas) {
        this.imageSrc("./img/pixil-frame-0 (26).png");
        let cielNuages = new Images(this.imageSource, this.pos, this.taille);
        cielNuages.setBackground(this);
        cielNuages.afficher(canvas);
    }

    typeMortTenue() {
      return EnumTypeMort.TENUE_CIEL;
    }

    choixPlateforme(){
        //return new PlateformeOiseaux();
        let min=1; 
        let max=4;  
        let random = Math.floor(Math.random() * (max - min)) + min; 
        if(random == 1){
            return new PlateformeOiseaux();
        }
        else if (random == 2){
            return new PlateformeNuages();
        }
        else if (random == 3) {
            return new PlateformePiegesNuages();
        }
    }



}