class PlateformePierre extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/pierre2.png');
        this.taille = new Taille(120,50);
        let pierre = new Images(this.img, this.pos, this.taille);
        pierre.setBackground(this.background);
        pierre.afficher(canvas);
    }
   
}