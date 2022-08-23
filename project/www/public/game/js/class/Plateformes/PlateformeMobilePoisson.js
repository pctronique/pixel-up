class PlateformeMobilePoisson extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/posson.png');
        let poisson = new Images(this.img, this.pos, this.taille);
        poisson.setBackground(this.background);
        poisson.afficher(canvas);
    }
   
}