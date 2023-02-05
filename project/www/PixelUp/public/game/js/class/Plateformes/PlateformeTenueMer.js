class PlateformeTenueMer extends Plateforme{
    constructor(allImage, taille = undefined, collisionHautStable = true) {
        super(allImage, taille, collisionHautStable);
        this.taille = new Taille(100,35);
    }

    afficher(canvas){
        //this.img;
        //this.imageSrc(this.allImage.recupImgData("plft_pierreTenue_2"));
        this.createBorder(canvas);
        let pierre = new Images(this.allImage.recupImg("plft_pierreTenue_2"), new Position(this.pos.x-65, this.pos.y-16), new Taille(200,50));
        pierre.setBackground(this.background);
        pierre.afficher(canvas);
    }
}