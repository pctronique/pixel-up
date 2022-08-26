class ScrollMove {
    constructor(idGame) {
        this.game = document.getElementById(idGame);
        this.background = undefined;
        this.calculOld = this.game.scrollTop;
    }

    debut() {
        this.game.scrollTop = this.game.scrollHeight;
    }

    setBackground(background) {
        this.background = background;
    }

    taillePixel() {
        return (this.game.scrollHeight/this.game.childElementCount)/this.background.taille.y;
    }

    monter(nb) {
        if(this.calculOld == 0) {
            this.calculOld = this.game.scrollTop;
        }
        //console.log(this.calculOld);
        let calcul0 = this.game.scrollHeight - this.game.offsetHeight;
        let calcul01 = calcul0 - ((calcul0/100)*nb);
        let mult = this.game.scrollHeight / this.game.offsetHeight;
        /*console.log("scrollTop : " + this.game.scrollTop);
        console.log("scrollHeight : " + this.game.scrollHeight);
        console.log("scrollWidth : " + this.game.scrollWidth);
        console.log("offsetHeight : " + this.game.offsetHeight);
        console.log("offsetWidth : " + this.game.offsetWidth);
        console.log("mult : " + mult);
        console.log("nb : " + nb);
        console.log("calcul0 : " + calcul0);
        console.log("calcul01 : " + calcul01);*/
        if(this.calculOld > calcul01+170) {
            this.calculOld = calcul01+170;
        }
        this.game.scrollTop = this.calculOld;
        console.log("scrollTop (new) : " + this.game.scrollTop);
        /*if(this.background != undefined) {
            this.background.screenBottom(this.placeBas());
        }*/
    }

    calculMilieu() {
        let taillePixel = this.taillePixel();
        return (this.background.taille.y-this.game.offsetHeight/2)/this.taillePixel();
    }

    placeBas() {
        return ((this.game.scrollHeight - this.game.scrollWidth) + (this.game.scrollWidth - this.game.offsetHeight) - this.game.scrollTop);
    }

    changeBackground() {
        return this.game.scrollHeight / this.game.childElementCount - this.game.offsetHeight;
    }
}
