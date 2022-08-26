class BackgroundTerre extends Background {



    constructor(idBackground, taille, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille, imgBack, imgBas);
        this.creerPlatforme(50, 300, 25, 80);
        this.creerPlatformeBottom(new PlateformeLave());
        this.creerPlateformeTenue(new TenueCiel());
        this.creerPlateformePourTenue(new PlateformeTenueCiel());
        
    }

    imgBackDisplay(canvas) {
        this.imageSrc("./img/immeuble2.png");
        let Terre = new Images(this.imageSource, this.pos, this.taille);
        Terre.setBackground(this);
        Terre.afficher(canvas);
    }

    choixPlateforme(){
        let min=1; 
        let max=3;  
        let random = Math.floor(Math.random() * (max - min)) + min; 
        if(random == 1){
            return new PlateformeNacelles();
        }
        else if (random == 2){
            return new PlateformePiegesNacelles();
        }
   
    }
        
    }



