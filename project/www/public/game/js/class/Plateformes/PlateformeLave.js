class PlateformeLave extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(0, 50);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/lave.png');
        let avions = new Images(this.img, this.pos, this.taille);
        avions.setBackground(this.background);
        avions.afficher(canvas);
    }
   
}