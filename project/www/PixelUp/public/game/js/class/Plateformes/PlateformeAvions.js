class PlateformeAvions extends PlateformePiegeCote {
    constructor(allImage, taille = undefined, collisionHautStable = true) {
        super(allImage, taille, collisionHautStable);
        this.taille = new Taille(80,20);
        this.deplacementImg = 1;
    }

    typeMort() {
        this.effetGameOver();
        return EnumTypeMort.AVION;
    }

    afficher(canvas){
        this.deplacement();
        //this.img;
        //this.imageSrc(this.allImage.recupImgData("plft_avion"));
        this.createBorder(canvas);
        let avions = new Images(this.allImage.recupImg("plft_avion"), new Position(this.pos.x-16, this.pos.y-15), new Taille(100,50));
        avions.setObjetDuplique(this);
        avions.setBackground(this.background);
        avions.afficher(canvas);
    }
   
}