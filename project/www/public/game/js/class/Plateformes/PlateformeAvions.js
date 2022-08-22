class PlateformeAvions extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
    }

    afficher(){
        //this.img;
        this.imageSrc('./img/avion_pixel-remove1.png');
        let avions = new Images(this.img, this.pos, this.taille);
        avions.afficher(this.idBackground);
    }
   
}