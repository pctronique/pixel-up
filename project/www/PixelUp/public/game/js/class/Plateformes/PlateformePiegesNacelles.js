class PlateformePiegesNacelles extends PlateformePiegeHaut{
    constructor(allImage, taille = undefined, collisionHautStable = true) {
        super(allImage, taille, collisionHautStable);
        this.taille = new Taille(65,20);

    }
    typeMort() {
        this.effetGameOver();
        return EnumTypeMort.NACELLECASSEE;
    }
    afficher(canvas){
        //this.img;
        //this.imageSrc(this.allImage.recupImgData("plft_nacelle_piege"));
        let piegesNacelles = new Images(this.allImage.recupImg("plft_nacelle_piege"), new Position(this.pos.x-20, this.pos.y-27), new Taille(100,70));
        this.createBorder(canvas);
        piegesNacelles.setBackground(this.background);
        piegesNacelles.afficher(canvas);
    }
   
}