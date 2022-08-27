class BackgroundSousMer extends Background {



    constructor(idBackground, taille, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille, imgBack, imgBas);
        this.creerPlatforme(50, 300, 25, 80);
        this.creerPlatformeBottom(new PlateformeMeduses());
        this.creerPlateformeTenue(new TenueTerre());
        this.creerPlateformePourTenue(new PlateformeTenueTerre(), new Position(-20,36));
        
    }

    imgBackDisplay(canvas) {
        this.imageSrc("./img/mer5.png");
        let sousMer = new Images(this.imageSource, this.pos, this.taille);
        sousMer.setBackground(this);
        sousMer.afficher(canvas);
    }

    choixPlateforme(){
        let min=1; 
        let max=4;  
        let random = Math.floor(Math.random() * (max - min)) + min; 
        if(random == 1){
            return new PlateformeMobilePoisson();
        }
        else if (random == 2){
            return new PlateformeMobileRequin();
        }
        else if (random == 3) {
            return new PlateformePiegesRadFish();
        }
   
    }


}