class BackgroundSousMer extends Background {



    constructor(idBackground, taille, imgBack = undefined, imgBas = undefined) {
        super(idBackground, taille, imgBack, imgBas)
        
    }

    imgBackDisplay(canvas) {
        this.imageSrc("./img/mer5.png");
        let sousMer = new Images(this.imageSource, this.pos, this.taille);
        sousMer.setBackground(this);
        sousMer.afficher(canvas);
    }

    choixPlateforme(taille){
        let min=1; 
        let max=2;  
        let random = Math.floor(Math.random() * (max - min)) + min; 
        console.log(random);
        if(random == 1){
            return new PlateformePoisson(taille);
        }
        else if (random == 2){
            return new PlateformeRequin(taille);
        }
   
    }


}