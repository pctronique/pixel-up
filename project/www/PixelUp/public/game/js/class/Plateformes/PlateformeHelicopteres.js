class PlateformeHelicopteres extends PlateformePiegeHaut {
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
    }

    typeMort() {
        return EnumTypeMort.HELICOPTERE;
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/helico2.png');
        this.createBorder(canvas);
        let helicopteres = new Images(this.img, this.pos, this.taille);
        helicopteres.setIsRepeat(true);
        helicopteres.setBackground(this.background);
        helicopteres.afficher(canvas);
    }
   
}