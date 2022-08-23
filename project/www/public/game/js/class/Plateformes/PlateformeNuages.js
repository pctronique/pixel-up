class PlateformeNuages extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/nuage3.png');
        let nuages = new Images(this.img, this.pos, this.taille);
        nuages.afficher(canvas);
    }
   
}