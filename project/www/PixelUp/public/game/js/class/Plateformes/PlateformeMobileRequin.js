class PlateformeMobileRequin extends PlateformePiegeCote {
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(120,80);
        this.deplacementImg = 1;
    }

    typeMort() {
        return EnumTypeMort.REQUIN;
    }

    afficher(canvas){
        this.deplacement();
        //this.img;
        this.imageSrc('./img/requin2.png');
        this.createBorder(canvas);
        let requin = new Images(this.img, this.pos, this.taille);
        requin.setObjetDuplique(this);
        requin.setBackground(this.background);
        requin.afficher(canvas);
    }
   
}