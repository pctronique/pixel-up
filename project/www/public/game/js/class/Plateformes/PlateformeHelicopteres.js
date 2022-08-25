class PlateformeHelicopteres extends PlateformePiegeHaut {
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
    }

    typeMort() {
        return EnumTypeMort.TOMBER;
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/helico2.png');
        let helicopteres = new Images(this.img, this.pos, this.taille);
        helicopteres.setBackground(this.background);
        helicopteres.afficher(canvas);
    }
   
}