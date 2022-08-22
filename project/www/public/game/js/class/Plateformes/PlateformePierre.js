class PlateformePierre extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille);
    }

    afficher(){
        //this.img;
        this.imageSrc('./img/pierre.png');
        let pierre = new Images(this.img, this.pos, this.taille);
        pierre.afficher(this.idBackground);
    }
   
}