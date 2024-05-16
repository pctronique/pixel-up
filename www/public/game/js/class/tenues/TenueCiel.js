class TenueCiel extends Tenue{
    constructor(taille = undefined, collisionHautStable = true){
        super(taille, collisionHautStable);
        this.setTenue(EnumTenues.CIEL);
}
afficher(canvas){
    //this.img;

    this.imageSrc('./img/boiteWingsuit.png');

    let wingsuit= new Images(this.img, this.pos, this.taille);
    wingsuit.setBackground(this.background);
    wingsuit.afficher(canvas);
}

}