class BackgroundCielNuages extends Background {



    constructor(idBackground, taille, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille, imgBack, imgBas);
        this.creerPlatforme(50, 300, 25, 80);
        
    }

    imgBackDisplay(canvas) {
        this.imageSrc("./img/cielNuage.png");
        let cielNuages = new Images(this.imageSource, this.pos, this.taille);
        cielNuages.setBackground(this);
        cielNuages.afficher(canvas);
    }

    choixPlateforme(){
        let min=1; 
        let max=3;  
        let random = Math.floor(Math.random() * (max - min)) + min; 
        if(random == 1){
            return new PlateformeOiseaux();
        }
        else if (random == 2){
            return new PlateformeNuages();
        }
   
    }



}