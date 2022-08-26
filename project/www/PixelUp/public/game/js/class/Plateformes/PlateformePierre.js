class PlateformePierre extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(120,50);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/pierreBackground.png');
        let pierre = new Images(this.img, this.pos, this.taille);
        pierre.setBackground(this.background);
        pierre.afficher(canvas);
    }
   
}