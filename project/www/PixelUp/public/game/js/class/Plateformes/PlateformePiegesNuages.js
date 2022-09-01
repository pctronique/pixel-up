class PlateformePiegesNuages extends PlateformeMobile{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(82,20);

    }
    action(enumCollision) {
        if (enumCollision == EnumCollision.HAUT) {
            return EnumAction.MORT;
        }
        return EnumAction.NULL;
    }
    typeMort() {
        this.effetGameOver();
        return EnumTypeMort.NUAGEGRIS;
    }


    afficher(canvas) {
        this.deplacement();

        //this.img;
        this.imageSrc('./img/nuage_gris.png');
        let piegesNuages = new Images(this.img, new Position(this.pos.x-40, this.pos.y-38), new Taille(150,100));
        this.createBorder(canvas);
        piegesNuages.setObjetDuplique(this);
        piegesNuages.setBackground(this.background);
        piegesNuages.afficher(canvas);
    }
   
}