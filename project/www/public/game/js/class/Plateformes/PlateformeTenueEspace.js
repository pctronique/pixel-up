class PlateformeTenueEspace extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);

        this.taille = new Taille(150,60);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/arcenciel.png');
        this.createBorder(canvas);
        let arcEnCiel = new Images(this.img, this.pos, this.taille);
        arcEnCiel.setBackground(this.background);
        arcEnCiel.afficher(canvas);
    }
}