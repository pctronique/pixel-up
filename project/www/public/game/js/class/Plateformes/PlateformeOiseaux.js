class PlateformeOiseaux extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/oiseau.png');
        this.taille = new Taille(100,50);
        let oiseaux = new Images(this.img, this.pos, this.taille);
        oiseaux.setBackground(this.background);
        oiseaux.afficher(canvas);
    }
   
}