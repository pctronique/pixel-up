class PlateformeMeteoritesFeu extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
    }

    afficher(){
        //this.img;
        this.imageSrc('./img/meteoriteFeu.png');
        let meteoritesFeu = new Images(this.img, this.pos, this.taille);
        meteoritesFeu.afficher(this.idBackground);
    }
   
}