class PixelEcran {
    constructor(hauteurImg, scrollElement) {
        this.hauteur = hauteurImg;
        this.scrollElement = scrollElement;
    }

    divTaille() {
        return this.hauteur/(this.scrollElement.scrollHeight/2);
    }
    
    posEcran(posImg) {
        return posImg/this.divTaille();
    }
    
    moitierEcran() {
        return (this.scrollElement.offsetHeight/2)*this.divTaille();
    }
    
    unPixelEcran(unpixel) {
        return unpixel*this.divTaille();
    }
}