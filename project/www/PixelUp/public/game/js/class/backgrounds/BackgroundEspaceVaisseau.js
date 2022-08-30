class BackgroundEspaceVaisseau extends Background {



    constructor(idBackground, taille, scrollMove = undefined, tabConfig = undefined, configMoveUser = undefined, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille,  scrollMove, tabConfig, configMoveUser, imgBack, imgBas);
        if(tabConfig == undefined) {
            this.creerPlatforme(50, 300, 25, 80);
        } else {
            this.creerPlatforme(tabConfig.minX, tabConfig.maxX, tabConfig.minY, tabConfig.maxY);
        }
        this.creerPlatformeBottom(new PlateformeMeteoritesFeu());
        this.setTenueBackground(EnumTenues.ESPACE);
    }

    imgBackDisplay(canvas) {
        this.imageSrc("./img/fondEspace2.jpg");
        let BackgroundEspaceVaisseau = new Images(this.imageSource, this.pos, this.taille);
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
            return new PlateformeVaisseauJaune(taille);
        }
        else if (random == 2){
            return new PlateformeVaisseau(taille);
        }
   
    }



}