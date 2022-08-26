class PlateformePiegesRadFish extends PlateformeMobile{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(250,140);

    }
    action(enumCollision) {
        if (enumCollision == EnumCollision.HAUT) {
            return EnumAction.MORT;
        }
        return EnumAction.NULL;
    }
    typeMort() {
        return EnumTypeMort.RADFISH;
    }

    afficher(canvas) {
        this.deplacement();

        //this.img;
        this.imageSrc('./img/RadFish.png');
        let piegesRadFish = new Images(this.img, this.pos, this.taille);
        piegesRadFish.setObjetDuplique(this);
        piegesRadFish.setBackground(this.background);
        piegesRadFish.afficher(canvas);
    }
   
}               