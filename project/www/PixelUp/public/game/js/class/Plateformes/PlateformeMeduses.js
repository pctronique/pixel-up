class PlateformeMeduses extends PlateformePiegeHaut {
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        //this.taille = new Taille(0, 80);
    }

    typeMort() {
        return EnumTypeMort.MEDUSE;
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/meduse2.png');
        this.createBorder(canvas);
        let meduses = new Images(this.img, this.pos, this.taille);
        meduses.setBackground(this.background);
        meduses.afficher(canvas);
    }
   
}