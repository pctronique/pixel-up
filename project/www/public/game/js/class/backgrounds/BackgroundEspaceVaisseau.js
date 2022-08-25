class BackgroundEspaceVaisseau extends Background {



    constructor(idBackground, taille, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille, imgBack, imgBas);
        this.creerPlatforme(50, 300, 25, 80);
        this.creerPlatformeBottom(new PlateformeMeteoritesFeu());
        
    }

    imgBackDisplay(canvas) {
        this.imageSrc("./img/fondEspace2.jpg");
        let BackgroundEspaceVaisseau = new Images(this.imageSource, this.pos, this.taille);
        BackgroundEspaceVaisseau.setBackground(this);
        BackgroundEspaceVaisseau.afficher(canvas);
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