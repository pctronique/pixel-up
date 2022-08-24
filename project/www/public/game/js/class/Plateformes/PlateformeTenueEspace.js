class PlateformeTenueEspace extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);

        this.taille = new Taille(150,50);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/arcenciel.png');

        let arcEnCiel = new Images(this.img, this.pos, this.taille);
        arcEnCiel.setBackground(this.background);
        arcEnCiel.afficher(canvas);
    }
}