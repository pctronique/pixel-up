class PlateformeMobileRequin extends PlateformePiegeCote {
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(85,30);
        this.deplacementImg = 1;
    }

    typeMort() {
        this.effetGameOver();
        return EnumTypeMort.REQUIN;
    }

    afficher(canvas){
        this.deplacement();
        //this.img;
        this.imageSrc('./img/requin2.png');
        this.createBorder(canvas);
        let requin = new Images(this.img, new Position(this.pos.x-25, this.pos.y-32), new Taille(120,80));
        requin.setObjetDuplique(this);
        requin.setBackground(this.background);
        requin.afficher(canvas);
    }
   
}