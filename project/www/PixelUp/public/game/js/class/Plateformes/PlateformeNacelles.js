class PlateformeNacelles extends Plateforme{
    constructor(allImage, taille = undefined, collisionHautStable = true) {
        super(allImage, taille, collisionHautStable);
        this.taille = new Taille(65,20);

    }
    typeMort() {
        return EnumTypeMort.NULL;
    }

    afficher(canvas){
        //this.img;
        //this.imageSrc(this.allImage.recupImgData("plft_nacelle"));
        this.createBorder(canvas);
        let nacelles = new Images(this.allImage.recupImg("plft_nacelle"), new Position(this.pos.x-20, this.pos.y-27), new Taille(100,70));
        nacelles.setObjetDuplique(this);
        nacelles.setBackground(this.background);
        nacelles.afficher(canvas);
    }
   
}