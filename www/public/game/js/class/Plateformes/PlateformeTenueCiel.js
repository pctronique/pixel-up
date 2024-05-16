class PlateformeTenueCiel extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);

        this.taille = new Taille(115,15);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/nacelleTenue.png');
        this.createBorder(canvas);
        let nacelle = new Images(this.img, new Position(this.pos.x-37, this.pos.y-19), new Taille(180,50));
        nacelle.setBackground(this.background);
        nacelle.afficher(canvas);
    }
}