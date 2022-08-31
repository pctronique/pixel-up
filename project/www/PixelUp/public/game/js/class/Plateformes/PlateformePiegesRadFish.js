class PlateformePiegesRadFish extends PlateformeMobile{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(90,23);
        this.piege = true;

    }
    action(enumCollision) {
        if (enumCollision == EnumCollision.HAUT) {
    
            return EnumAction.MORT;
        }
        return EnumAction.NULL;
    }
    typeMort() {
        this.effetGameOver();
        return EnumTypeMort.RADFISH;
    }

    afficher(canvas) {
        this.deplacement();

        //this.img;
        this.imageSrc('./img/RadFish.png');
        let piegesRadFish = new Images(this.img, new Position(this.pos.x-84, this.pos.y-58), new Taille(250,140));
        this.createBorder(canvas);
        piegesRadFish.setObjetDuplique(this);
        piegesRadFish.setBackground(this.background);
        piegesRadFish.afficher(canvas);
    }
   
}               