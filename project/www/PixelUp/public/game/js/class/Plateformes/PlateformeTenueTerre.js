class PlateformeTenueTerre extends Plateforme{
    constructor(allImage, taille = undefined, collisionHautStable = true) {
        super(allImage, taille, collisionHautStable);

        this.taille = new Taille(120,32);
    }

    afficher(canvas){
        //this.img;
        //this.imageSrc(this.allImage.recupImgData("plft_nenuphar_3"));
        this.createBorder(canvas);
        let nenuphare = new Images(this.allImage.recupImg("plft_nenuphar_3"), new Position(this.pos.x-10, this.pos.y-16), new Taille(140,50));
        nenuphare.setBackground(this.background);
        nenuphare.afficher(canvas);
    }
}