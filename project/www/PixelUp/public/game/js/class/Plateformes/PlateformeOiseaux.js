class PlateformeOiseaux extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(100,50);

    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/oiseau.png');
        let oiseaux = new Images(this.img, this.pos, this.taille);
        oiseaux.setBackground(this.background);
        oiseaux.afficher(canvas);
    }
   
}