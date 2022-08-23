class PlateformeMobileAsteroide extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/asteroide.png');
        let asteroide = new Images(this.img, this.pos, this.taille);
        asteroide.setBackground(this.background);
        asteroide.afficher(canvas);
    }
   
}