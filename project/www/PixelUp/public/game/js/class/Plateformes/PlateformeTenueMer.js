class PlateformeTenueMer extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(200,50);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/pierreTenue2.png');
        this.createBorder(canvas);
        let pierre = new Images(this.img, this.pos, this.taille);
        pierre.setBackground(this.background);
        pierre.afficher(canvas);
    }
}