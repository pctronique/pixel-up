class PlateformePierre extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/pierre.png');
        let pierre = new Images(this.img, this.pos, this.taille);
        pierre.setBackground(this.background);
        pierre.afficher(canvas);
    }
   
}