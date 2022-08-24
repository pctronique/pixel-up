class BackgroundCielNuages extends Background {



    constructor(idBackground, taille, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille, imgBack, imgBas);
        this.creerPlatformeBottom(new PlateformeHelicopteres());
        this.creerPlateformeTenue(undefined);
        
    }

    imgBackDisplay(canvas) {
        this.imageSrc("./img/cielNuage.png");
        let cielNuages = new Images(this.imageSource, this.pos, this.taille);
        cielNuages.setBackground(this);
        cielNuages.afficher(canvas);
    }

    choixPlateforme(taille){
        let min=1; 
        let max=3;  
        let random = Math.floor(Math.random() * (max - min)) + min; 
        if(random == 1){
            return new PlateformeOiseaux(taille);
        }
        else if (random == 2){
            return new PlateformeNuages(taille);
        }
   
    }



}