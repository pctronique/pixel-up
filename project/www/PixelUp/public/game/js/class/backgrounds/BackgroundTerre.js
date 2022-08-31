class BackgroundTerre extends Background {



    constructor(idBackground, taille, scrollMove = undefined, tabConfig = undefined, configMoveUser = undefined, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille,  scrollMove, tabConfig, configMoveUser, imgBack, imgBas);
        if(tabConfig == undefined) {
            this.creerPlatforme(50, 300, 25, 80);
        } else {
            this.creerPlatforme(tabConfig.minX, tabConfig.maxX, tabConfig.minY, tabConfig.maxY);
        }
        this.creerPlatformeBottom(new PlateformeLave());
        this.creerPlateformeTenue(new TenueCiel());
        this.creerPlateformePourTenue(new PlateformeTenueCiel(), new Position(-25,53));
        this.setTenueBackground(EnumTenues.Terre);
    }

    imgBackDisplay(canvas) {
        this.imageSrc("./img/pixil-frame-0 (8)coupe2.png");
        let Terre = new Images(this.imageSource, this.pos, this.taille);
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
            return new PlateformeNacelles();
        }
        else if (random == 2){
            this.isPiege = true;
            return new PlateformePiegesNacelles();
        }
   
    }
        
    }



