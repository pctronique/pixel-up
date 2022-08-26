class PlateformeNuages extends PlateformeMobile{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(100,90);

    }

    action(enumCollision) {
        if (enumCollision == EnumCollision.HAUT) {
            return EnumAction.STOP;
        }
        return EnumAction.NULL;
    }

    afficher(canvas){
        this.deplacement();
        //this.img;
        this.imageSrc('./img/nuage3.png');
        this.createBorder(canvas);
        let nuages = new Images(this.img, this.pos, this.taille);
        nuages.setObjetDuplique(this);
        nuages.setBackground(this.background);
        nuages.afficher(canvas);
    }
   
}