class PlateformePierre extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(100,50);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/pierre2.png');
        let pierre = new Images(this.img, this.pos, this.taille);
        pierre.setBackground(this.background);
        pierre.afficher(canvas);
    }
   
}