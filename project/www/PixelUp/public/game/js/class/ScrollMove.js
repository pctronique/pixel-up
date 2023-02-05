class ScrollMove {
    constructor(idGame, game) {
        this.folderWorker0 = folderWorker;
        if(this.folderWorker0 == undefined) {
            this.folderWorker0 = "./js/worker/";
        }
        this.gameElement = document.getElementById(idGame);
        this.background = undefined;
        this.calculOld = this.gameElement.scrollTop;
        this.game = game;
        this.posScrollOld = undefined;
        this.posScrollSous = 0;
        this.posScroll = 0;
        this.backgroundTaille = new Taille(0, 0);
        this.scrollAutoWorker = undefined;
        this.autoScroll0 = false;
        this.autoScrollActive = true;
        this.autoMultiple = 1;
        this.milliseconde = 1000;
        this.monterAuto = 0;
    }

    setAutoScrollActive(active) {
        this.autoScrollActive = active;
    }

    backgroundMove(background) {
        this.background = background;
    }

    configAuto(autoMultiple, milliseconde) {
        this.autoMultiple = autoMultiple;
        this.milliseconde = milliseconde;
    }

    findMonter() {
        this.stop();
        this.start();
    }

    moveAuto() {
        if(this.game != undefined && this.autoScroll0) {
            let autoScrollCalcul = true;
            let classScroll = this;
            this.scrollAutoWorker.onmessage = function (e) {
                if (autoScrollCalcul) {
                    classScroll.scrollAutoMonter();
                }
                if (autoScrollCalcul) {
                    autoScrollCalcul = e.data[1];
                }
                if (!autoScrollCalcul) {
                    classScroll.findMonter();
                }
            };
        }
    }

    start() {
        if(!this.autoScroll0 && this.autoScrollActive) {
            this.autoScroll0 = true;
            this.scrollAutoWorker = new Worker(this.folderWorker0+"workerMoveAutoScroll.js");
            this.moveAuto();
            this.scrollAutoWorker.postMessage([this.autoMultiple, this.milliseconde, true]);
        }
    }

    stop() {
        if(this.scrollAutoWorker != undefined) {
            this.scrollAutoWorker.postMessage([0, 0, false]);
            this.scrollAutoWorker.terminate();
            this.scrollAutoWorker = undefined;
        }
        this.autoScroll0 = false;
    }

    scrollAutoMonter() {
        if(this.posScrollOld == undefined) {
            this.posScrollOld = (this.gameElement.scrollHeight-this.gameElement.offsetHeight);
        }
        if(this.game != undefined && this.autoScroll0) {
            let nbCount = this.game.nbBackground-2;
            if(nbCount>=0) {
                this.monterAuto++;
                this.monterAuto = this.monterAuto - (this.backgroundTaille.y*nbCount);
                if(this.monterAuto > 0) {
                    let postScrollAuto = this.gameElement.scrollTop - this.monterAuto;
                    if(this.posScrollOld > postScrollAuto) {
                        this.gameElement.scrollTop = postScrollAuto;
                        this.posScrollOld = postScrollAuto;
                    }
                }
            }
        }
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
