class Plateforme extends BlockRectange {

    /**
     * 
     * @param {*} taille sa taille
     * @param {*} collisionHautStable conserver le joueur au dessu de la platforme
     */
    constructor(taille = undefined, collisionHautStable = true) {
        super(taille);
        this.piege = false;
        if(this.taille == undefined || this.taille.y == 0) {
            this.taille = new Taille(0, 20);
        }
        this.volume = 100;
    }

    getPiege() {
        return this.piege;
    }

    afficher(canvas) {
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.pos.x, this.pos.y, this.taille.x, this.taille.y);
        if (this.background != undefined) {
          this.background.afficherContenue();
        }
    }

    effetPas(){
        let effetPas =new EffetsSonores("son/pas2.mp3",this.volume,true);
        effetPas.start();
    }

    effetSaut(){
        let effetSaut =new EffetsSonores("son/sfx-boing9.mp3",this.volume,true);
        effetSaut.start();
    }

    effetGameOver(){
        let effetGameOver = new EffetsSonores("son/gameOver.mp3", 100, true);
        effetGameOver.start();
    }
    
    action(enumCollision) {
        if(enumCollision == EnumCollision.HAUT) {
          this.effetPas();
            return EnumAction.STOP;
        }
        return EnumAction.NULL;
    }
    
}