class PlateformeMobileRequin extends PlateformeMobile {
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(100,50);

    }

    typeMort() {
        return EnumTypeMort.TOMBER;
    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/requin.png');
        let requin = new Images(this.img, this.pos, this.taille);
        requin.setBackground(this.background);
        requin.afficher(canvas);
    }
   
}