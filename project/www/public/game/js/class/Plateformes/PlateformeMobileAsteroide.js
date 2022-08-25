class PlateformeMobileAsteroide extends PlateformeMobile {
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(100,50);

    }

    typeMort() {
        return EnumTypeMort.TOMBER;
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/asteroide.png');
        let asteroide = new Images(this.img, this.pos, this.taille);
        asteroide.setBackground(this.background);
        asteroide.afficher(canvas);
    }
   
}