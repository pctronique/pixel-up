class PlateformeTenueTerre extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);

        this.taille = new Taille(120,32);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/nenuphar3.png');
        this.createBorder(canvas);
        let nenuphare = new Images(this.img, new Position(this.pos.x-10, this.pos.y-16), new Taille(140,50));
        nenuphare.setBackground(this.background);
        nenuphare.afficher(canvas);
    }
}