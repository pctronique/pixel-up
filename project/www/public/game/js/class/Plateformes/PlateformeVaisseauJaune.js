class PlateformeVaisseauJaune extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.taille = new Taille(100,50);

    }

    afficher(canvas){
        //this.img;
        this.imageSrc('./img/vaisseau_jaune.png');
        let vaisseauJaune = new Images(this.img, this.pos, this.taille);
        vaisseauJaune.setBackground(this.background);
        vaisseauJaune.afficher(canvas);
    }
   
}