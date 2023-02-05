class PlateformeTenueCiel extends Plateforme{
    constructor(allImage, taille = undefined, collisionHautStable = true) {
        super(allImage, taille, collisionHautStable);

        this.taille = new Taille(115,15);
    }

    afficher(canvas){
        //this.img;
        //this.imageSrc(this.allImage.recupImgData("plft_nacelleTenue"));
        this.createBorder(canvas);
        let nacelle = new Images(this.allImage.recupImg("plft_nacelleTenue"), new Position(this.pos.x-37, this.pos.y-19), new Taille(180,50));
        nacelle.setBackground(this.background);
        nacelle.afficher(canvas);
    }
}