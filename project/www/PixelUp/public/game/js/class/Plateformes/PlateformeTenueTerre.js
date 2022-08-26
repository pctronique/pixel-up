class PlateformeTenueTerre extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);

        this.taille = new Taille(140,50);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/nenuphar3.png');
        this.createBorder(canvas);
        let nenuphare = new Images(this.img, this.pos, this.taille);
        nenuphare.setBackground(this.background);
        nenuphare.afficher(canvas);
    }
}