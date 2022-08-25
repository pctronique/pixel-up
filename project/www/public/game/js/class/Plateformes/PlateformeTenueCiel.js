class PlateformeTenueCiel extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);

        this.taille = new Taille(180,50);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/nacelleTenue.png');

        let nacelle = new Images(this.img, this.pos, this.taille);
        nacelle.setBackground(this.background);
        nacelle.afficher(canvas);
    }
}