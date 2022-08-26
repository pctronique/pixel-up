class Images2 {
    constructor(src, pos, taille) {

        this.src = src;
        this.x = 0;
        this.y = 0;
        this.nbr = 0;
        this.pos = pos;
        this.taille = taille;
        this.isGif = false;
        this.isCut = false;
        this.color = undefined;
        this.background = undefined;
    }
    setBackground(background) {
        this.background = background;
    }
    typeGif() {
        this.isGif = true;
    }
    afficher(canvas) {
        //if (monCanvas.getContext) {
        let ctx = canvas.getContext('2d');
        /* nouvelle image */
        let img = new Image();
        /* définition de la source */
        img.src = this.src;
        /* tracé uniquement quand l'image sera chargée
        (quand l'événement onLoad sera déclenché, exécuter ctx.drawImage() */
        let classImgs = this;
        
        img.onload = function () {
            if(classImgs.isCut) {
                classImgs.selectImag(img.width, img.height, img, ctx);
            } else {
                classImgs.uneImage(img, ctx);
            }
            classImgs.transpImg(ctx);
            if(classImgs.background != undefined) {
                classImgs.background.afficherContenue();
            }
        }

    }

    imgGif(src) {
    }

    uneImage(img, ctx) {
        return ctx.drawImage(img, this.pos.x, this.pos.y, this.taille.x, this.taille.y);
    }

    selectImag(width, height, img, ctx) {
        let imgPos = this.posSect(width, height);
        return ctx.drawImage(img, imgPos.x, imgPos.y, this.taille.x, this.taille.y, this.pos.x, this.pos.y, this.taille.x, this.taille.y);
    }

    posSect(width, height) {
            let nbX = width / this.taille.x;
            let nbY = height / this.taille.y;
            let compter = 0;
            for (let indexY = 0; indexY < nbY; indexY++) {
                for (let indexX = 0; indexX < nbX; indexX++) {
                    if(compter == this.nbr) {
                        return new Position(indexX*this.taille.x, indexY*this.taille.y);
                    }
                    compter++;
                }
            }
        return new Position(0, 0);
    }

    colorTransparance(color) {
        this.color = color;
    }

    transpImg(ctx) {
        /*const imgData = ctx.getImageData(0,0,this.taille.x,this.taille.y);
        if(this.color != undefined) {
            let r = Number.parseInt(this.color.substring(1, 3), 16);
            let g = Number.parseInt(this.color.substring(3, 5), 16);
            let b = Number.parseInt(this.color.substring(5, 7), 16);
            for (let i = 0; i < imgData.data.length; i += 4) {
            if (
                imgData.data[i] == r &&
                imgData.data[i + 1] == g &&
                imgData.data[i + 2] == b
            ) {
                imgData.data[i + 3] = 0;
            }
            }
            return imgData;
        }*/
    }
    
    select(nbr) {
        this.isCut = true;
        this.nbr = nbr;
    }

}