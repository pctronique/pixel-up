class PlateformePiegesNuages extends PlateformeMobile{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(150,100);

    }
    action(enumCollision) {
        if (enumCollision == EnumCollision.HAUT) {
            return EnumAction.MORT;
        }
        return EnumAction.NULL;
    }
    typeMort() {
        return EnumTypeMort.TOMBER;
    }


    afficher(canvas) {
        this.deplacement();

        //this.img;
        this.imageSrc('./img/nuage_gris.png');
        let piegesNuages = new Images(this.img, this.pos, this.taille);
        piegesNuages.setObjetDuplique(this);
        piegesNuages.setBackground(this.background);
        piegesNuages.afficher(canvas);
    }
   
}