class PlateformeNacelles extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/nacelle.png');
        let nacelles = new Images(this.img, this.pos, this.taille);
        nacelles.setBackground(this.background);
        nacelles.afficher(canvas);
    }
   
}