class BackgroundCielNuages extends Background {



    constructor(allImage, idBackground, taille, scrollMove = undefined, tabConfig = undefined, configMoveUser = undefined, imgBack = undefined, imgBas = undefined) {
        super(allImage, idBackground, taille,  scrollMove, tabConfig, configMoveUser, imgBack, imgBas);
        if(tabConfig == undefined) {
            this.creerPlatforme(50, 300, 25, 80);
        } else {
            this.creerPlatforme(tabConfig.minX, tabConfig.maxX, tabConfig.minY, tabConfig.maxY);
        }
        this.creerPlatformeBottom(new PlateformeHelicopteres(this.allImage));
        this.creerPlateformeTenue(undefined);
        this.setTenueBackground(EnumTenues.CIEL);
    }

    imgBackDisplay(canvas) {
        //this.imageSrc(this.allImage.recupImgData("bkg_ciel_nuages"));
        let cielNuages = new Images(
            this.allImage.recupImg("bkg_ciel_nuages"), this.pos, this.taille);
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
        if(this.stopPg) {
            max=3;
        }
        let random = Math.floor(Math.random() * (max - min)) + min; 
        if(random == 1){
            return new PlateformeOiseaux(this.allImage);
        }
        else if (random == 2){
            this.isPiege = false;
            return new PlateformeNuages(this.allImage);
        }
        else if (random == 3) {
            this.isPiege = true;
            return new PlateformePiegesNuages(this.allImage);
        }
    }



}