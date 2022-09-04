class PlateformeMobilePoisson extends PlateformeMobile {
    constructor(allImage, taille = undefined, collisionHautStable = true) {
        super(allImage, taille, collisionHautStable);
        this.taille = new Taille(70,25);
    }

    action(enumCollision) {
        if (enumCollision == EnumCollision.HAUT) {
            this.effetPas();
            return EnumAction.STOP;
        }
        return EnumAction.NULL;
    }
    typeMort() {
        return EnumTypeMort.NULL;
    }
    afficher(canvas){
        this.deplacement();
        //this.img;
        //this.imageSrc(this.allImage.recupImgData("plft_poisson"));
        this.createBorder(canvas);
        let poisson = new Images(this.allImage.recupImg("plft_poisson"), new Position(this.pos.x-16, this.pos.y-15), new Taille(100,50));
        poisson.setObjetDuplique(this);
        poisson.setBackground(this.background);
        poisson.afficher(canvas);
    }
   
}