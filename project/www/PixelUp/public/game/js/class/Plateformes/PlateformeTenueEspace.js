class PlateformeTenueEspace extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);

        this.taille = new Taille(115,30);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/arcenciel.png');
        this.createBorder(canvas);
        let arcEnCiel = new Images(this.img, new Position(this.pos.x-20, this.pos.y-10), new Taille(150,60));
        arcEnCiel.setBackground(this.background);
        arcEnCiel.afficher(canvas);
    }
}