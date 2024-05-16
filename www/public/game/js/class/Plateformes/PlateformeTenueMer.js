class PlateformeTenueMer extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(100,35);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/pierreTenue2.png');
        this.createBorder(canvas);
        let pierre = new Images(this.img, new Position(this.pos.x-65, this.pos.y-16), new Taille(200,50));
        pierre.setBackground(this.background);
        pierre.afficher(canvas);
    }
}