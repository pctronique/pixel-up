class Plateforme extends BlockRectange {

    /**
     * 
     * @param {*} taille sa taille
     * @param {*} collisionHautStable conserver le joueur au dessu de la platforme
     */
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille);
    }

    afficher(canvas) {
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.pos.x, this.pos.y, this.taille.x, this.taille.y);
        if (this.background != undefined) {
          this.background.afficherContenue();
        }
    }

    action(enumCollision) {
        if(enumCollision == EnumCollision.HAUT) {
            return EnumAction.STOP;
        }
        return EnumAction.NULL;
    }

    
}