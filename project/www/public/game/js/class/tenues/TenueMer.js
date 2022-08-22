class TenueMer extends Tenue{
    constructor(taille = undefined, collisionHautStable = true){
        super(taille, collisionHautStable);

    }

    action(enumCollision) {
        if(enumCollision == EnumCollision.HAUT) {
            return EnumAction.STOP;
        }
        return EnumAction.NULL;
    }
}