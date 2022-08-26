class PlateformeMobileRequin extends PlateformePiegeCote {
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(100,50);
        this.deplacementImg = 1;
    }

    typeMort() {
        return EnumTypeMort.TOMBER;
    }

    afficher(canvas){
        this.deplacement();
        //this.img;
        this.imageSrc('./img/requin.png');
        this.createBorder(canvas);
        let requin = new Images(this.img, this.pos, this.taille);
        requin.setObjetDuplique(this);
        requin.setBackground(this.background);
        requin.afficher(canvas);
    }
   
}