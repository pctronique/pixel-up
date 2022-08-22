class PlateformeMobilePoisson extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille);
    }

    afficher(){
        //this.img;
        this.imageSrc('./img/posson.png');
        let poisson = new Images(this.img, this.pos, this.taille);
        poisson.afficher(this.idBackground);
    }
   
}