class PlateformeFeu extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
    }

    afficher(canvas){
        //this.img;

        this.imageSrc('./img/flamme.png');

        let feu = new Images(this.img, this.pos, this.taille);
        feu.setBackground(this.background);
        feu.afficher(canvas);
    }
   
}