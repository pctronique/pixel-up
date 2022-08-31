class PlateformeMobilePoisson extends PlateformeMobile {
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(70,25);
    }

    action(enumCollision) {
        if (enumCollision == EnumCollision.HAUT) {
            //this.effetPas();
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
        this.imageSrc('./img/posson.png');
        this.createBorder(canvas);
        let poisson = new Images(this.img, new Position(this.pos.x-16, this.pos.y-15), new Taille(100,50));
        poisson.setObjetDuplique(this);
        poisson.setBackground(this.background);
        poisson.afficher(canvas);
    }
   
}