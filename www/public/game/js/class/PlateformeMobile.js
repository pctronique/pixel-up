class PlateformeMobile extends Plateforme {
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille, collisionHautStable);
        this.deplacementImg = -1;
    }
}