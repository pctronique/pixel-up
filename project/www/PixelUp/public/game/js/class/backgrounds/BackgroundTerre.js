class BackgroundTerre extends Background {



    constructor(allImage, idBackground, taille, scrollMove = undefined, tabConfig = undefined, configMoveUser = undefined, imgBack = undefined, imgBas = undefined) {
        super(allImage, idBackground, taille,  scrollMove, tabConfig, configMoveUser, imgBack, imgBas);
        if(tabConfig == undefined) {
            this.creerPlatforme(50, 300, 25, 80);
        } else {
            this.creerPlatforme(tabConfig.minX, tabConfig.maxX, tabConfig.minY, tabConfig.maxY);
        }
        this.creerPlatformeBottom(new PlateformeLave(this.allImage));
        this.creerPlateformeTenue(new TenueCiel(this.allImage));
        this.creerPlateformePourTenue(new PlateformeTenueCiel(this.allImage), new Position(-25,53));
        this.setTenueBackground(EnumTenues.TERRE);
    }

    imgBackDisplay(canvas) {
        //this.imageSrc(this.allImage.recupImgData("bkg_ville"));
        let Terre = new Images(this.allImage.recupImg("bkg_ville"), this.pos, this.taille);
        Terre.setBackground(this);
        Terre.afficher(canvas);
    }

    typeMortTenue() {
      return EnumTypeMort.TENUE_TERRE;
    }

    choixPlateforme(){
        //return new PlateformeNacelles();
        let min=1; 
        let max=3;
        if(this.stopPg) {
            max=2;
        } 
        let random = Math.floor(Math.random() * (max - min)) + min; 
        if(random == 1){
            this.isPiege = false;
            return new PlateformeNacelles(this.allImage);
        }
        else if (random == 2){
            this.isPiege = true;
            return new PlateformePiegesNacelles(this.allImage);
        }
   
    }
        
    }



