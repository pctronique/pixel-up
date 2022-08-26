class PlateformeMeduses extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        //this.taille = new Taille(0, 80);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/meduse2.png');
        let meduses = new Images(this.img, this.pos, this.taille);
        meduses.setBackground(this.background);
        meduses.afficher(canvas);
    }
   
}