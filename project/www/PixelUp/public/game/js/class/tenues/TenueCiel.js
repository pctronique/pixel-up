class TenueCiel extends Tenue{
    constructor(allImage, taille = undefined, collisionHautStable = true){
        super(allImage, taille, collisionHautStable);
        this.setTenue(EnumTenues.CIEL);
}
afficher(canvas){
    //this.img;

    //this.imageSrc(this.allImage.recupImgData("boite_wing_suit"));

    let wingsuit= new Images(this.allImage.recupImg("boite_wing_suit"), this.pos, this.taille);
    wingsuit.setBackground(this.background);
    wingsuit.afficher(canvas);
}

}