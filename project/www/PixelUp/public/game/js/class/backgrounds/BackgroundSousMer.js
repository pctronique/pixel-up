class BackgroundSousMer extends Background {



    constructor(allImage, idBackground, taille, scrollMove = undefined, tabConfig = undefined, configMoveUser = undefined, imgBack = undefined, imgBas = undefined) {
        super(allImage, idBackground, taille,  scrollMove, tabConfig, configMoveUser, imgBack, imgBas);
        if(tabConfig == undefined) {
            this.creerPlatforme(50, 300, 25, 80);
        } else {
            this.creerPlatforme(tabConfig.minX, tabConfig.maxX, tabConfig.minY, tabConfig.maxY);
        }
        this.creerPlatformeBottom(new PlateformeMeduses(this.allImage));
        this.creerPlateformeTenue(new TenueTerre(this.allImage));
        this.creerPlateformePourTenue(new PlateformeTenueTerre(this.allImage), new Position(-20,36));
        this.setTenueBackground(EnumTenues.MER);
    }

    imgBackDisplay(canvas) {
        //this.imageSrc(this.allImage.recupImgData("bkg_sous_mer"));
        let sousMer = new Images(this.allImage.recupImg("bkg_sous_mer"), this.pos, this.taille);
        sousMer.setBackground(this);
        sousMer.afficher(canvas);
    }

    typeMortTenue() {
      return EnumTypeMort.TENUE_MER;
    }

    choixPlateforme(){
        //return new PlateformeMobilePoisson();
        let min=1; 
        let max=4;  
        if(this.stopPg) {
            max=3;
        }
        let random = Math.floor(Math.random() * (max - min)) + min; 
        if(random == 1){
            this.isPiege = false;
            return new PlateformeMobilePoisson(this.allImage);
        }
        else if (random == 2){
            this.isPiege = false;
            return new PlateformeMobileRequin(this.allImage);
        }
        else if (random == 3) {
            this.isPiege = true;
            return new PlateformePiegesRadFish(this.allImage);
        }
    }


}