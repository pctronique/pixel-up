class PlateformeMeteoritesFeu extends PlateformePiegeHaut {
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
    }

    typeMort() {
        return EnumTypeMort.TOMBER;
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/meteorite2.png');
        this.createBorder(canvas);
        let meteoritesFeu = new Images(this.img, this.pos, this.taille);
        meteoritesFeu.setBackground(this.background);
        meteoritesFeu.afficher(canvas);
    }
   
}