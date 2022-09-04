class PlateformePierre extends Plateforme {
    constructor(allImage, taille = undefined, collisionHautStable = true) {
        super(allImage, taille, collisionHautStable);
        //this.taille = new Taille(120,50);
        this.taille = new Taille(60,35);
    }
    typeMort() {
        return EnumTypeMort.NULL;
    }

    action(enumCollision) {
        if(enumCollision == EnumCollision.HAUT) {
            this.effetPas();
            return EnumAction.STOP;
        }
        return EnumAction.NULL;
    }

    afficher(canvas){
        //this.img;
        //this.imageSrc(this.allImage.recupImgData("plft_pierre"));
        this.createBorder(canvas);
        //let pierre = new Images(this.img, this.pos, this.taille);
        let pierre = new Images(this.allImage.recupImg("plft_pierre"), new Position(this.pos.x-40, this.pos.y-15), new Taille(120,50));
        pierre.setObjetDuplique(this);
        pierre.setBackground(this.background);
        pierre.afficher(canvas);
    }
   
}