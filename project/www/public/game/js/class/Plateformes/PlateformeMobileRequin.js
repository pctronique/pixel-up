class PlateformeMobileRequin extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille);
    }

    afficher(){
        //this.img;
        this.imageSrc('./img/requin.png');
        let requin = new Images(this.img, this.pos, this.taille);
        requin.afficher(this.idBackground);
    }
   
}