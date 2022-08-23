class PlateformeOiseaux extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/oiseau.png');
        let oiseaux = new Images(this.img, this.pos, this.taille);
        oiseaux.afficher(canvas);
    }
   
}