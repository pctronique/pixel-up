class PlateformeNuages extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/nuage3.png');
        this.taille = new Taille(100,90);
        let nuages = new Images(this.img, this.pos, this.taille);
        nuages.setBackground(this.background);
        nuages.afficher(canvas);
    }
   
}