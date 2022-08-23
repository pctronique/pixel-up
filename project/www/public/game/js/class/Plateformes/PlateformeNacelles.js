class PlateformeNacelles extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/nacelle.png');
        this.taille = new Taille(100,70);
        let nacelles = new Images(this.img, this.pos, this.taille);
        nacelles.afficher(canvas);
    }
   
}