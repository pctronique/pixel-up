class PlateformeTenueEspace extends Plateforme{
    constructor(allImage, taille = undefined, collisionHautStable = true) {
        super(allImage, taille, collisionHautStable);

        this.taille = new Taille(115,30);
    }

    afficher(canvas){
        //this.img;
        //this.imageSrc(this.allImage.recupImgData("plft_arcEnCiel"));
        this.createBorder(canvas);
        let arcEnCiel = new Images(this.allImage.recupImg("plft_arcEnCiel"), new Position(this.pos.x-20, this.pos.y-10), new Taille(150,60));
        arcEnCiel.setBackground(this.background);
        arcEnCiel.afficher(canvas);
    }
}