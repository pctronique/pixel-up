class BackgroundEspaceVaisseau extends Background {



    constructor(allImage, idBackground, taille, scrollMove = undefined, tabConfig = undefined, configMoveUser = undefined, imgBack = undefined, imgBas = undefined) {
        super(allImage, idBackground, taille,  scrollMove, tabConfig, configMoveUser, imgBack, imgBas);
        if(tabConfig == undefined) {
            this.creerPlatforme(50, 300, 25, 80);
        } else {
            this.creerPlatforme(tabConfig.minX, tabConfig.maxX, tabConfig.minY, tabConfig.maxY);
        }
        this.creerPlatformeBottom(new PlateformeMeteoritesFeu(this.allImage));
        this.setTenueBackground(EnumTenues.ESPACE);
    }

    imgBackDisplay(canvas) {
        //this.imageSrc(this.allImage.recupImgData("bkg_vaisseaux"));
        let BackgroundEspaceVaisseau = new Images(this.allImage.recupImg("bkg_vaisseaux"), this.pos, this.taille);
        BackgroundEspaceVaisseau.setBackground(this);
        BackgroundEspaceVaisseau.afficher(canvas);
    }

    typeMortTenue() {
      return EnumTypeMort.TENUE_ESPACE;
    }

    choixPlateforme(taille) {
        
        let min=1; 
        let max=3;  
        let random = Math.floor(Math.random() * (max - min)) + min; 
        if(random == 1){
            return new PlateformeVaisseauJaune(this.allImage, taille);
        }
        else if (random == 2){
            return new PlateformeVaisseau(this.allImage, taille);
        }
   
    }



}