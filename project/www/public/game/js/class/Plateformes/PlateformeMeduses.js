class PlateformeMeduses extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
    }

    afficher(){
        //this.img;
        this.imageSrc('./img/meduse.png');
        let meduses = new Images(this.img, this.pos, this.taille);
        meduses.afficher(this.idBackground);
    }
   
}