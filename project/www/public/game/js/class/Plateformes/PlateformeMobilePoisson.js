class PlateformeMobilePoisson extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/posson.png');
        this.taille = new Taille(100,50);
        let poisson = new Images(this.img, this.pos, this.taille);
        poisson.afficher(canvas);
    }
   
}