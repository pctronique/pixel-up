class PlateformeNuages extends PlateformeMobile{
    constructor(allImage, taille = undefined, collisionHautStable = true) {
        super(allImage, taille, collisionHautStable);
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
        //this.imageSrc(this.allImage.recupImgData("plft_nuage_3"));
        this.createBorder(canvas);
        let nuages = new Images(this.allImage.recupImg("plft_nuage_3"), new Position(this.pos.x-25, this.pos.y-34), new Taille(100,90));
        nuages.setObjetDuplique(this);
        nuages.setBackground(this.background);
        nuages.afficher(canvas);
    }
   
}