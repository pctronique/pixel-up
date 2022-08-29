class PlateformeNuages extends PlateformeMobile{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(55,20);

    }

    action(enumCollision) {
        if (enumCollision == EnumCollision.HAUT) {
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
        this.imageSrc('./img/nuage3.png');
        this.createBorder(canvas);
        let nuages = new Images(this.img, new Position(this.pos.x-25, this.pos.y-34), new Taille(100,90));
        nuages.setObjetDuplique(this);
        nuages.setBackground(this.background);
        nuages.afficher(canvas);
    }
   
}