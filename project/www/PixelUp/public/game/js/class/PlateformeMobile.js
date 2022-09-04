class PlateformeMobile extends Plateforme {
    constructor(allImage, taille = undefined, collisionHautStable = true) {
        super(allImage, taille, collisionHautStable);
        this.deplacementImg = -1;
    }
}