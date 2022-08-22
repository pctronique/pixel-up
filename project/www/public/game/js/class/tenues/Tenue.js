class Tenue extends Plateforme{
    constructor(taille = undefined, collisionHautStable = true){
        super(taille, collisionHautStable);
        this.joueur = undefined;
        this.tenue = undefined;
    }
    setTenue(tenue){
        this.tenue = tenue;
    }
    setJoueur(joueur){
        this.joueur = joueur;
    }
    action(enumCollision) {
        if(enumCollision == EnumCollision.HAUT || enumCollision == EnumCollision.BAS || enumCollision == EnumCollision.GAUCHE|| enumCollision == EnumCollision.DROITE ) {
            this.joueur.changementTenue(this.tenue);
            return EnumAction.TENUE;
            
        }
        return EnumAction.NULL;
    }

}