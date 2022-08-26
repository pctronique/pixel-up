class ScrollMove {
    constructor(idGame) {
        this.game = document.getElementById(idGame);
        this.background = undefined;
    }

    setBackground(background) {
        this.background = background;
    }

    taillePixel() {
        return (screenGame.scrollHeight/screenGame.childElementCount)/this.background.taille.y;
    }

    monter(nb) {
        let calcul0 = screenGame.scrollHeight - screenGame.offsetHeight;
        let calcul01 = calcul0 - ((calcul0/100)*nb);
        let mult = screenGame.scrollHeight / screenGame.offsetHeight;
        console.log("scrollTop : " + screenGame.scrollTop);
        console.log("scrollHeight : " + screenGame.scrollHeight);
        console.log("scrollWidth : " + screenGame.scrollWidth);
        console.log("offsetHeight : " + screenGame.offsetHeight);
        console.log("offsetWidth : " + screenGame.offsetWidth);
        console.log("mult : " + mult);
        console.log("nb : " + nb);
        console.log("calcul0 : " + calcul0);
        console.log("calcul01 : " + calcul01);
        screenGame.scrollTop = calcul01+170;
        console.log("scrollTop (new) : " + screenGame.scrollTop);
    }

    calculMilieu() {
        let taillePixel = this.taillePixel();
        return (this.background.taille.y-screenGame.offsetHeight/2)/this.taillePixel();
    }

    placeBas() {
        return ((screenGame.scrollHeight - screenGame.scrollWidth) + (screenGame.scrollWidth - screenGame.offsetHeight) - screenGame.scrollTop);
    }

    changeBackground() {
        return screenGame.scrollHeight / screenGame.childElementCount - screenGame.offsetHeight;
    }
}