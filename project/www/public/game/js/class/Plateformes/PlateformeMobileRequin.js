class PlateformeMobileRequin extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille);
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/requin.png');
        this.taille = new Taille(100,50);
        let requin = new Images(this.img, this.pos, this.taille);
        requin.afficher(canvas);
    }
   
}