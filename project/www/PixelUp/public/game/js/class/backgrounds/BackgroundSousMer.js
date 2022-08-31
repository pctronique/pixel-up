class BackgroundSousMer extends Background {



    constructor(idBackground, taille, scrollMove = undefined, tabConfig = undefined, configMoveUser = undefined, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille,  scrollMove, tabConfig, configMoveUser, imgBack, imgBas);
        if(tabConfig == undefined) {
            this.creerPlatforme(50, 300, 25, 80);
        } else {
            this.creerPlatforme(tabConfig.minX, tabConfig.maxX, tabConfig.minY, tabConfig.maxY);
        }
        this.creerPlatformeBottom(new PlateformeMeduses());
        this.creerPlateformeTenue(new TenueTerre());
        this.creerPlateformePourTenue(new PlateformeTenueTerre(), new Position(-20,36));
        this.setTenueBackground(EnumTenues.MER);
    }

    imgBackDisplay(canvas) {
        this.imageSrc("./img/background_SOUS_MER.png");
        let sousMer = new Images(this.imageSource, this.pos, this.taille);
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
            return new PlateformeMobilePoisson();
        }
        else if (random == 2){
            this.isPiege = false;
            return new PlateformeMobileRequin();
        }
        else if (random == 3) {
            this.isPiege = true;
            return new PlateformePiegesRadFish();
        }
   
    }


}