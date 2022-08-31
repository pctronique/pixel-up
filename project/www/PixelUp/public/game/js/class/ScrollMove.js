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
        const element = this.game.backgrounds[0];
        let pixelEcran = new PixelEcran(element.taille.y, this.gameElement);
        /*console.log("pos_joueur : " + element.joueur.pos.y);
        console.log("scrollTop : " + this.gameElement.scrollTop);
        console.log("scrollHeight : " + this.gameElement.scrollHeight);
        console.log("scrollWidth : " + this.gameElement.scrollWidth);
        console.log("offsetHeight : " + this.gameElement.offsetHeight);
        console.log("offsetWidth : " + this.gameElement.offsetWidth);
        console.log("posJoueurEcran : " + pixelEcran.unPixelEcran(element.joueur.pos.y+element.joueur.taille.y));
        console.log("divEcran : " + pixelEcran.moitierEcran());*/
        console.log("pos joueur : "+pixelEcran.unPixelEcran(element.joueur.pos.y+element.joueur.taille.y));
        let calcul021 = pixelEcran.unPixelEcran(element.joueur.pos.y+element.joueur.taille.y)/pixelEcran.divTaille();
        console.log("pos scroll : "+calcul021);
        let scrollTotal = this.gameElement.scrollHeight-this.gameElement.offsetHeight;
        let calcul01 = pixelEcran.unPixelEcran(element.taille.y-(element.joueur.pos.y+element.joueur.taille.y)) - pixelEcran.moitierEcran();
        //console.log(calcul01);
        if(calcul01 > 0) {
            let calcul2 = calcul01*((this.gameElement.scrollHeight/this.gameElement.offsetHeight)*this.gameElement.offsetWidth);
              //this.gameElement.scrollTop = scrollTotal-calcul2 ;
        }
        /*this.posScroll = (this.gameElement.scrollHeight-this.gameElement.offsetHeight)-posScrollSous;
        console.log("this.posScroll : " + this.posScroll);
        if(this.posScrollOld > this.posScroll) {
            this.gameElement.scrollTop = this.posScroll;
        }*/
    }

    calculMilieu() {
        let taillePixel = this.taillePixel();
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
            this.game.addBackground();
        }
    }

}
