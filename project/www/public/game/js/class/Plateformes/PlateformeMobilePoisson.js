class PlateformeMobilePoisson extends PlateformeMobile {
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(100,50);

    }

    action(enumCollision) {
        if (enumCollision == EnumCollision.HAUT) {
            return EnumAction.STOP;
        }
        return EnumAction.NULL;
    }
    typeMort() {
        return EnumTypeMort.POISSON;
    }
    afficher(canvas){
        this.deplacement();
        //this.img;
        this.imageSrc('./img/posson.png');
        this.createBorder(canvas);
        let poisson = new Images(this.img, this.pos, this.taille);
        poisson.setObjetDuplique(this);
        poisson.setBackground(this.background);
        poisson.afficher(canvas);
    }
   
}