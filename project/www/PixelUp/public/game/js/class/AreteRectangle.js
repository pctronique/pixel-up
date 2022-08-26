class AreteRectangle {
    constructor(pos, taille) {
        this.pos = pos;
        this.taille = taille;
    }

    haut() {
        return new AreteRectangleCote(this.pos.y, this.pos.x, this.pos.x+this.taille.x);
    }

    bas() {
        return new AreteRectangleCote(this.pos.y+this.taille.y, this.pos.x, this.pos.x+this.taille.x);
    }

    gauche() {
        return new AreteRectangleCote(this.pos.x, this.pos.y, this.pos.y+this.taille.y);
    }

    droite() {
        return new AreteRectangleCote(this.pos.x+this.taille.x, this.pos.y, this.pos.y+this.taille.y);
    }

}
