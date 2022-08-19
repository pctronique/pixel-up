class PlateformeMeduses extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille);
    }

    afficher(){
        //this.img;
        let meduses = new Images(this.img, this.pos, this.taille);
        meduses.afficher(this.idBackground);
    }
   
}