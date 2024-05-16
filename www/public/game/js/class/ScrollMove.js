class ScrollMove {
    constructor(idGame, game) {
        this.gameElement = document.getElementById(idGame);
        this.background = undefined;
        this.calculOld = this.gameElement.scrollTop;
        this.game = game;
        this.posScrollOld = undefined;
        this.posScrollSous = 0;
        this.posScroll = 0;
        this.backgroundTaille = new Taille(0, 0);
    }

    setBackgroundTaille(taille) {
        if(taille!= undefined) {
            this.backgroundTaille = taille;
        }
    }

    debut() {
        this.posScrollOld = undefined;
        this.gameElement.scrollTop = this.gameElement.scrollHeight;
    }

    recalculPos() {
        this.posScrollOld = this.posScrollOld-this.gameElement.offsetHeight;
        this.gameElement.scrollTop = this.posScrollOld;
    }

    taillePixel() {
        return (this.gameElement.scrollHeight/this.gameElement.childElementCount)/this.backgroundTaille.y;
    }

    monter() {
        if(this.gameElement.scrollTop == 0) {
            this.posScrollOld = undefined;
            this.gameElement.scrollTop = this.gameElement.scrollHeight;
        }
        const element = this.game.backgrounds[0];
        let pixelEcran = new PixelEcran(element.taille.y, this.gameElement);
        let posJoueur = element.taille.y-(element.joueur.pos.y+element.joueur.taille.y);
        if(posJoueur<0) {
            posJoueur = -1*(posJoueur-element.taille.y);
        }
        let posJoueurEcran = (pixelEcran.posEcran(posJoueur)-(this.gameElement.offsetHeight/3));
        let scrollTotal = this.gameElement.scrollHeight-this.gameElement.offsetHeight;
        this.posScroll = scrollTotal-posJoueurEcran;
        if(this.posScrollOld > this.posScroll) {
            this.gameElement.scrollTop = this.posScroll;
        }
    }

    calculMilieu() {
        return (this.backgroundTaille.y-this.gameElement.offsetHeight/2)/this.taillePixel();
    }

    placeBas() {
        return ((this.gameElement.scrollHeight - this.gameElement.scrollWidth) + (this.gameElement.scrollWidth - this.gameElement.offsetHeight) - this.gameElement.scrollTop);
    }

    bottom() {
        if(this.posScrollOld == undefined) {
            this.posScrollOld = (this.gameElement.scrollHeight-this.gameElement.offsetHeight);
        }
        if(this.posScrollOld > this.posScroll) {
            this.posScrollOld = this.posScroll;
        }
        let st = -1 * (this.placeBas() / this.taillePixel());
        this.game.screenBottom(st);
    }

    changeBackground() {
        let scrollHaut = this.gameElement.scrollHeight / this.gameElement.childElementCount - this.gameElement.offsetHeight;
        if (this.gameElement.scrollTop < scrollHaut) {
            this.gameElement.scrollTop = this.gameElement.scrollHeight;
            this.posScroll = this.gameElement.scrollTop;
            this.posScrollOld = (this.gameElement.scrollHeight-this.gameElement.offsetHeight);
            this.game.addBackground();
            this.monter();
        }
    }

}
