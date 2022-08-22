class PlateformeFeu extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
    }

    afficher(){
        //this.img;
        this.imageSrc('./img/feu.png');
        let feu = new Images(this.img, this.pos, this.taille);
        feu.afficher(this.idBackground);
    }
   
}