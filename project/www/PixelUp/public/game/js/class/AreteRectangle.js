class AreteRectangle {
    constructor(pos, taille) {
        this.pos = pos;
        this.taille = taille;
    }

    haut() {
        return new AreteRectangleCote(Math.floor(this.pos.y), Math.floor(this.pos.x), Math.floor(this.pos.x+this.taille.x));
    }

    bas() {
        return new AreteRectangleCote(Math.floor(this.pos.y+this.taille.y), Math.floor(this.pos.x), Math.floor(this.pos.x+this.taille.x));
    }

    gauche() {
        return new AreteRectangleCote(Math.floor(this.pos.x), Math.floor(this.pos.y), Math.floor(this.pos.y+this.taille.y));
    }

    droite() {
        return new AreteRectangleCote(Math.floor(this.pos.x+this.taille.x), Math.floor(this.pos.y), Math.floor(this.pos.y+this.taille.y));
    }

}
